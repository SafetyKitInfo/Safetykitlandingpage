import sendgrid from '@sendgrid/mail'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const body = req.body || {};

  // Try sending via SendGrid if API key present, otherwise log and return success.
  const key = process.env.SENDGRID_API_KEY
  if (key) {
    try {
      sendgrid.setApiKey(key)
      const msg = {
        to: process.env.CONTACT_RECEIVER_EMAIL || 'info.safetykit@gmail.com',
        from: process.env.CONTACT_FROM_EMAIL || 'no-reply@safetykit.com.au',
        subject: `Website contact from ${body.name || 'visitor'}`,
        text: `Name: ${body.name || ''}\nEmail: ${body.email || ''}\nOrg: ${body.organization || ''}\n\nMessage:\n${body.message || ''}`,
      }
      await sendgrid.send(msg)
      return res.status(200).json({ ok: true })
    } catch (err) {
      console.error('SendGrid error:', err)
      return res.status(500).json({ ok: false, error: 'email_failed' })
    }
  }

  // Fallback: log submission
  console.log('Contact form submission:', body)
  res.status(200).json({ ok: true })
}
