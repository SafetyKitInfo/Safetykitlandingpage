import sendgrid from '@sendgrid/mail'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const body = req.body || {};

  // Allow opting out of SendGrid sending so we can log submissions and
  // return success for manual handling or local testing.
  // By default, disable sending in non-production environments so local
  // development doesn't attempt to send real email. Set DISABLE_SENDGRID=false
  // (and NODE_ENV=production) to enable sending.
  const disableSend = process.env.DISABLE_SENDGRID === 'true' || process.env.FORCE_EMAIL_LOG_ONLY === 'true' || (process.env.NODE_ENV || 'development') !== 'production'
  const key = process.env.SENDGRID_API_KEY

  if (!disableSend && key) {
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
