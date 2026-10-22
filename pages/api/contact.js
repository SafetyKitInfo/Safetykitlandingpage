// No tracked page submits to this legacy endpoint. Current contact actions use
// fixed external links, so old clients are rejected before personal data can
// reach an unmonitored email, log, or filesystem fallback.
export default function handler(req, res) {
  res.setHeader('Allow', ['POST'])
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'method_not_allowed' })
  }

  return res.status(410).json({
    ok: false,
    error: 'contact_endpoint_retired',
    message: 'Use the waitlist link on the website to contact SafetySight.',
  })
}
