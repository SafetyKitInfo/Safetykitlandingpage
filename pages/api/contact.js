export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const body = req.body || {};

  // NOTE: Replace this stub with a real email provider (SendGrid, Mailgun, etc.)
  console.log('Contact form submission:', body);

  // For now, just return success so the frontend can show a friendly message.
  res.status(200).json({ ok: true });
}
