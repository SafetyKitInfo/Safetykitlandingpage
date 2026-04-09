import OpenAI from 'openai'
import { VISION_SYSTEM_PROMPT } from '../../lib/visionSystemPrompt'

// Simple in-memory rate limiter — resets per serverless instance cold start.
// For a persistent rate limit, use Vercel KV or a Redis-backed store.
const rateLimitMap = new Map()
const RATE_LIMIT_WINDOW_MS = 60_000  // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5    // max 5 scans per IP per minute
const MAX_IMAGE_BYTES = 5 * 1024 * 1024  // 5 MB

function checkRateLimit(ip) {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { windowStart: now, count: 1 })
    return true
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) return false

  entry.count += 1
  return true
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'method_not_allowed' })
  }

  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    console.error('GROQ_API_KEY is not configured')
    return res.status(500).json({ ok: false, error: 'vision_not_configured' })
  }

  // Rate limiting by IP
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown'
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ ok: false, error: 'rate_limit_exceeded' })
  }

  const { kit_id, image_base64, media_type } = req.body || {}

  if (!image_base64 || typeof image_base64 !== 'string') {
    return res.status(400).json({ ok: false, error: 'image_base64_required' })
  }

  // Validate image size (base64 is ~33% larger than binary)
  const estimatedBytes = Math.ceil((image_base64.length * 3) / 4)
  if (estimatedBytes > MAX_IMAGE_BYTES) {
    return res.status(413).json({ ok: false, error: 'image_too_large', maxBytes: MAX_IMAGE_BYTES })
  }

  // Determine MIME type — default to JPEG if not provided
  const mimeType = media_type || 'image/jpeg'
  const imageUrl = `data:${mimeType};base64,${image_base64}`

  const kitLabel = kit_id ? String(kit_id).slice(0, 100) : 'Unknown'
  const userText = `Kit ID: ${kitLabel}. Please analyse this safety kit image and return a JSON inspection report.`

  const client = new OpenAI({
    apiKey,
    baseURL: 'https://api.groq.com/openai/v1',
  })

  let rawContent = ''
  try {
    const response = await client.chat.completions.create({
      model: 'meta-llama/llama-4-scout-17b-16e-instruct',
      messages: [
        { role: 'system', content: VISION_SYSTEM_PROMPT },
        {
          role: 'user',
          content: [
            { type: 'image_url', image_url: { url: imageUrl } },
            { type: 'text', text: userText },
          ],
        },
      ],
      temperature: 0.1,
      max_tokens: 1024,
    })

    rawContent = response.choices?.[0]?.message?.content || ''
  } catch (err) {
    const msg = err?.message || 'groq_request_failed'
    console.error('Groq API error:', msg)
    return res.status(502).json({ ok: false, error: 'groq_request_failed', detail: msg })
  }

  // Parse the JSON returned by the model
  let parsed
  try {
    // Strip markdown code fences the model may occasionally add
    const cleaned = rawContent.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim()
    parsed = JSON.parse(cleaned)
  } catch (parseErr) {
    console.error('Failed to parse model JSON response:', rawContent)
    return res.status(502).json({ ok: false, error: 'invalid_model_response', raw: rawContent })
  }

  return res.status(200).json({ ok: true, result: parsed })
}
