import React, { useState } from 'react'

export default function ContactForm(){
  const [mailto, setMailto] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e){
    e.preventDefault();
    const fd = new FormData(e.target);
    const body = Object.fromEntries(fd.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.ok) {
        alert('Thanks — we received your message.');
        e.target.reset();
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
  }

  return (
    <section id="contact" className="py-16 bg-teal-50">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Contact Us</h3>
        <p className="text-gray-700 mt-2">Interested in a demo, pilot or quick walkthrough? Tell us a little about your needs and we'll respond within one business day.</p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
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
            <button type="submit" className="bg-teal-500 text-white px-5 py-3 rounded-md hover:bg-teal-600">Send Message</button>
            <a href="mailto:info.safetykit@gmail.com?subject=Book%20a%20demo" className="px-5 py-3 rounded-md border">Or email: info@safetykit@gmail.com</a>
            <a href="#" className="ml-auto text-sm text-slate-600">We typically reply within 1 business day</a>
          </div>

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
