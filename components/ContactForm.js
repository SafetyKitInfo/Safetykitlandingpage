import React, { useState } from 'react'

// Default to FormSubmit so the form works plug-and-play. You can override
// by setting `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in your environment.
const FORMSPREE_ENDPOINT = process?.env?.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formsubmit.co/info.safetykit%40gmail.com'
const USE_FORMSPREE = Boolean(FORMSPREE_ENDPOINT)

export default function ContactForm(){
  const [mailto, setMailto] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e){
    e.preventDefault();
    setIsSubmitting(true)
    setSuccessMsg('')
    const form = e.target

    // If using FormSubmit/Formspree, send the form as FormData from the browser
    if (USE_FORMSPREE) {
      const fd = new FormData(form)
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: fd,
          // Let the browser set the Content-Type (multipart/form-data)
          redirect: 'follow'
        })

        if (res.ok) {
          setSuccessMsg('Thanks — we received your message. We will reply within one business day.')
          form.reset()
          setMailto('')
          setErrorMsg('')
        } else {
          // If the response isn't OK, attempt to parse JSON error, else fallback
          let msg = 'Sorry, something went wrong.'
          try { const j = await res.json(); msg = j?.error || msg } catch (e){}
          handleFailure(Object.fromEntries(fd.entries()), msg)
        }
      } catch (err) {
        console.error('FormSubmit fetch error', err)
        // Network/CORS issues: fall back to a visible mailto fallback so user can contact
        handleFailure(Object.fromEntries(fd.entries()), err?.message || 'Error sending message.')
      } finally {
        setIsSubmitting(false)
      }
      return
    }

    // Otherwise fall back to internal API route (JSON)
    const fd = new FormData(form)
    const body = Object.fromEntries(fd.entries())
    try {
      const url = '/api/contact'
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      if (res.ok) {
        setSuccessMsg('Thanks — we received your message. We will reply within one business day.')
        form.reset()
        setMailto('')
        setErrorMsg('')
      } else {
        const json = await res.json().catch(() => ({}))
        const msg = json?.error || 'Sorry, something went wrong.'
        handleFailure(body, msg)
      }
    } catch (err) {
      console.error(err);
      handleFailure(body, err?.message || 'Error sending message.')
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleFailure(body, reason){
    setErrorMsg(String(reason))
    // Build a prefilled mailto as a fallback so users can email directly
    const to = process?.env?.NEXT_PUBLIC_CONTACT_EMAIL || 'info.safetykit@gmail.com'
    const subject = body.interest || 'Website contact'
    const bodyText = `Name: ${body.name || ''}\nEmail: ${body.email || ''}\nOrg: ${body.organization || ''}\nPhone: ${body.phone || ''}\n\nMessage:\n${body.message || ''}`
    const mail = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`
    setMailto(mail)
    // Do not auto-open the user's mail client. Show a clean mailto fallback
    // so the visitor can send manually if automatic delivery fails.
  }

  return (
    <section id="contact" className="py-16 bg-teal-50">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Contact Us</h3>
        <p className="text-gray-700 mt-2">Interested in a demo, pilot or quick walkthrough? Tell us a little about your needs and we'll respond within one business day.</p>

        <form
          action={USE_FORMSPREE ? FORMSPREE_ENDPOINT : '/api/contact'}
          method={USE_FORMSPREE ? 'POST' : undefined}
          onSubmit={USE_FORMSPREE ? undefined : handleSubmit}
          className="mt-6 grid gap-4"
        >
          {USE_FORMSPREE && (
            // FormSubmit helpers: disable captcha and set a friendly subject
            <>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New SafetyKit website contact" />
            </>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="p-3 rounded border" />
            <input name="email" type="email" required placeholder="Email" className="p-3 rounded border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="organization" placeholder="Organisation (optional)" className="p-3 rounded border" />
            <input name="phone" placeholder="Phone (optional)" className="p-3 rounded border" />
          </div>

          <label className="text-sm text-slate-600">I'm interested in</label>
          <select name="interest" className="p-3 rounded border w-full md:w-1/2">
            <option>Book a demo</option>
            <option>Start a 30-day pilot</option>
            <option>Partnerships</option>
            <option>Other / General enquiry</option>
          </select>

          <textarea name="message" required rows="5" placeholder="Tell us how we can help (brief)" className="p-3 rounded border"></textarea>

          <div className="flex gap-4 items-center">
            <button disabled={isSubmitting} type="submit" className="bg-teal-500 text-white px-5 py-3 rounded-md hover:bg-teal-600 disabled:opacity-50">{isSubmitting ? 'Sending…' : 'Send Message'}</button>
            <span className="ml-auto text-sm text-slate-600">We typically reply within 1 business day</span>
          </div>

          {successMsg && (
            <div className="mt-4 p-4 bg-green-50 border rounded">
              <p className="text-sm text-green-900">{successMsg}</p>
            </div>
          )}

          {mailto && (
            <div className="mt-4 p-4 bg-yellow-50 border rounded">
              <p className="text-sm text-yellow-900">We couldn't send your message automatically ({errorMsg}). You can still email us directly:</p>
              <a className="inline-block mt-2 text-teal-600 underline" href={mailto}>Compose email to info@safetykit@gmail.com</a>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
