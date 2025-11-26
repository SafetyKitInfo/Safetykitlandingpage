import sendgrid from '@sendgrid/mail'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const body = req.body || {};

  // Allow opting out of SendGrid sending so we can log submissions and
  // return success for manual handling or local testing.
  // By default, disable sending in non-production environments so local
  // development doesn't attempt to send real email. Set `DISABLE_SENDGRID=false`
  // and `NODE_ENV=production` to enable sending in production.
  // If you *explicitly* want to test real sends in development, set
  // `FORCE_SENDGRID_SEND=true` in your `.env.local` (requires a valid
  // `SENDGRID_API_KEY` and a verified `CONTACT_FROM_EMAIL`). Use with caution.
  const key = process.env.SENDGRID_API_KEY
  const forceSend = process.env.FORCE_SENDGRID_SEND === 'true'

  const optedOut = process.env.DISABLE_SENDGRID === 'true' || process.env.FORCE_EMAIL_LOG_ONLY === 'true'
  const allowSend = Boolean(key) && !optedOut && ((process.env.NODE_ENV || 'development') === 'production' || forceSend)

  if (allowSend) {
    if (forceSend) console.warn('FORCE_SENDGRID_SEND=true — sending via SendGrid in non-production environment')
    // Basic validation to catch obviously malformed keys (common mistake)
    const normalized = String(key).trim()
    if (!normalized.startsWith('SG.')) {
      console.error('SendGrid API key appears invalid or malformed')
      return res.status(500).json({ ok: false, error: 'invalid_sendgrid_key' })
    }

    try {
      sendgrid.setApiKey(normalized)
      const msg = {
        to: process.env.CONTACT_RECEIVER_EMAIL || 'info.safetykit@gmail.com',
        from: process.env.CONTACT_FROM_EMAIL || 'no-reply@safetykit.com.au',
        subject: `Website contact from ${body.name || 'visitor'}`,
        text: `Name: ${body.name || ''}\nEmail: ${body.email || ''}\nOrg: ${body.organization || ''}\n\nMessage:\n${body.message || ''}`,
      }

      await sendgrid.send(msg)
      return res.status(200).json({ ok: true })
    } catch (err) {
      // Sanitize and log the provider response without exposing secrets
      try {
        const msg = err?.message || 'unknown send error'
        console.error('SendGrid send failed:', msg)
        if (err?.response?.body) {
          console.error('SendGrid response body:', JSON.stringify(err.response.body))
        }
      } catch (logErr) {
        console.error('Error while logging SendGrid error')
      }

      // If SendGrid failed, attempt an SMTP fallback if configured.
      try {
        const smtpHost = process.env.SMTP_HOST
        const smtpPort = process.env.SMTP_PORT && Number(process.env.SMTP_PORT)
        const smtpUser = process.env.SMTP_USER
        const smtpPass = process.env.SMTP_PASS
        const enableSmtp = smtpHost && smtpPort && smtpUser && smtpPass && process.env.ENABLE_SMTP_FALLBACK === 'true'

        if (enableSmtp) {
          // Lazily require nodemailer so environments without it don't fail at import time
          const nodemailer = require('nodemailer')
          const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: String(process.env.SMTP_SECURE || 'false') === 'true',
            auth: { user: smtpUser, pass: smtpPass }
          })

          const mailOpts = {
            from: process.env.SMTP_FROM || process.env.CONTACT_FROM_EMAIL || 'no-reply@safetykit.com.au',
            to: process.env.CONTACT_RECEIVER_EMAIL || 'info.safetykit@gmail.com',
            subject: `Website contact (fallback) from ${body.name || 'visitor'}`,
            text: `Name: ${body.name || ''}\nEmail: ${body.email || ''}\nOrg: ${body.organization || ''}\n\nMessage:\n${body.message || ''}`
          }

          const info = await transporter.sendMail(mailOpts)
          console.log('SMTP fallback send success (messageId):', info && info.messageId)
          return res.status(200).json({ ok: true, fallback: 'smtp' })
        }
      } catch (smtpErr) {
        try { console.error('SMTP fallback failed:', smtpErr && (smtpErr.message || smtpErr)) } catch (e) {}
      }

      // As a convenience for local development, if SMTP isn't configured and
      // we're running in dev, send via Nodemailer's Ethereal test account so
      // you can verify the flow without real delivery. This only runs when
      // not in production.
      try {
        if ((process.env.NODE_ENV || 'development') !== 'production') {
          const nodemailer = require('nodemailer')
          const testAccount = await nodemailer.createTestAccount()
          const transporter = nodemailer.createTransport({
            host: testAccount.smtp.host,
            port: testAccount.smtp.port,
            secure: testAccount.smtp.secure,
            auth: { user: testAccount.user, pass: testAccount.pass }
          })

          const mailOpts = {
            from: process.env.SMTP_FROM || process.env.CONTACT_FROM_EMAIL || 'no-reply@safetykit.com.au',
            to: process.env.CONTACT_RECEIVER_EMAIL || 'info.safetykit@gmail.com',
            subject: `Website contact (ethereal) from ${body.name || 'visitor'}`,
            text: `Name: ${body.name || ''}\nEmail: ${body.email || ''}\nOrg: ${body.organization || ''}\n\nMessage:\n${body.message || ''}`
          }

          const info = await transporter.sendMail(mailOpts)
          const preview = nodemailer.getTestMessageUrl(info) || null
          console.log('Ethereal test send preview URL:', preview)
          return res.status(200).json({ ok: true, fallback: 'ethereal', previewUrl: preview })
        }
      } catch (ethErr) {
        try { console.error('Ethereal fallback failed:', ethErr && (ethErr.message || ethErr)) } catch (e) {}
      }

      return res.status(500).json({ ok: false, error: 'email_failed' })
    }
  }

  // Either SendGrid not configured/disabled or we intentionally opted out.
  console.log('Contact form submission (logged, send disabled):', body)

  // Persist the submission to a local newline-delimited JSON file for
  // simple manual review. This is intentionally minimal and local-only.
  try {
    const fs = require('fs')
    const path = require('path')
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })
    const out = path.join(dataDir, 'contacts.jsonl')
    const entry = { ts: new Date().toISOString(), ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress, ...body }
    fs.appendFileSync(out, JSON.stringify(entry) + '\n')
  } catch (e) {
    console.error('Failed to persist contact submission:', e && e.message)
  }

  res.status(200).json({ ok: true, logged: true })
}
