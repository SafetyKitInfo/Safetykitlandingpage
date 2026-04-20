import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { CheckCircle } from 'lucide-react'

// Default to FormSubmit using the activation token so the form is already
// activated. You can still override by setting `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.
// Activation token copied from your FormSubmit email.
const FORMSPREE_ENDPOINT = process?.env?.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formsubmit.co/9a951b8e0817844ac25b7d1ccf0cb563'
const USE_FORMSPREE = Boolean(FORMSPREE_ENDPOINT)

export default function ContactForm(){
  const [selectedIntent, setSelectedIntent] = useState('book-demo')
  const [mailto, setMailto] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [submittedName, setSubmittedName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const intentOptions = [
    { value: 'book-demo', label: 'Book a 15–30 min demo', help: 'See SafetyKit in action with a live walkthrough' },
    { value: 'start-pilot', label: 'Start a 30-day pilot', help: 'Full setup, QR tagging, and onboarding included' },
    { value: 'general', label: 'General enquiry', help: 'Ask us anything' },
    { value: 'partnerships', label: 'Partnerships & integrations', help: 'Integrate with your existing systems' }
  ]

  const getCTALabel = () => {
    switch(selectedIntent) {
      case 'start-pilot': return 'Start My 30-Day Pilot'
      case 'partnerships': return 'Discuss Partnership'
      default: return 'Book My Demo'
    }
  }

  async function handleSubmit(e){
    e.preventDefault();
    setIsSubmitting(true)
    setSuccessMsg('')
    const form = e.target

    // If using FormSubmit/Formspree, send the form as FormData from the browser
    if (USE_FORMSPREE) {
      const fd = new FormData(form)
      // Also send a JSON copy to our internal API so submissions are persisted
      // locally (data/contacts.jsonl). This ensures you can inspect messages
      // even if FormSubmit doesn't forward or verification wasn't clicked.
      try {
        const jsonBody = Object.fromEntries(fd.entries())
        // fire-and-wait: record locally first
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(jsonBody)
        })
      } catch (e) {
        // ignore logging errors — we still try FormSubmit below
        console.warn('Local logging failed', e)
      }
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: fd,
          // Let the browser set the Content-Type (multipart/form-data)
          redirect: 'follow'
        })

        if (res.ok) {
          const nameValue = form.querySelector('[name="name"]')?.value || 'there'
          setSubmittedName(nameValue)
          setSuccessMsg(`Thanks, ${nameValue}! We'll send times and details within 1 business day.`)
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
        const nameValue = body.name || 'there'
        setSubmittedName(nameValue)
        setSuccessMsg(`Thanks, ${nameValue}! We'll send times and details within 1 business day.`)
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
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Book a demo</h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">Share your details and we'll get back to you within 1 business day.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: What you'll get */}
          <div className="bg-sk-primary rounded-xl p-8 text-white">
            <h3 className="text-lg font-bold mb-6">What you'll get</h3>
            <ul className="space-y-5">
              {[
                { title: "Live demo of SafetyKit", detail: "A 15–30 min walkthrough of the readiness dashboard, proactive engine, and mobile scanning." },
                { title: "Tailored setup plan", detail: "We'll map out how SafetyKit fits your centres, rooms, and readiness workflow." },
                { title: "30-day pilot included", detail: "Full setup, QR tagging, and onboarding support — no credit card required." },
                { title: "Audit-readiness review", detail: "We'll identify the biggest gaps in your current kit process and how to close them." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-teal-300 flex-shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-teal-100 mt-0.5">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-teal-600">
              <p className="text-xs text-teal-200">No credit card required · Cancel anytime · Reply within 1 business day</p>
            </div>
          </div>

          {/* Right: Form card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
          <form
            action={USE_FORMSPREE ? FORMSPREE_ENDPOINT : '/api/contact'}
            method={USE_FORMSPREE ? 'POST' : undefined}
            onSubmit={USE_FORMSPREE ? undefined : handleSubmit}
            className="space-y-6"
          >
            {USE_FORMSPREE && (
              <>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New SafetyKit demo request" />
              </>
            )}

            {/* Name and Email - side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <Label htmlFor="contact-name" className="mb-2 font-medium">Your name</Label>
                <Input id="contact-name" name="name" required placeholder="e.g., Sarah" autoComplete="name" />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="contact-email" className="mb-2 font-medium">Work email</Label>
                <Input id="contact-email" name="email" type="email" required placeholder="e.g., sarah@centre.com.au" autoComplete="email" />
              </div>
            </div>

            {/* Organisation and Phone - side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <Label htmlFor="contact-org" className="mb-2 font-medium">Centre/Organisation</Label>
                <Input id="contact-org" name="organization" placeholder="e.g., My Organisation" autoComplete="organization" />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="contact-phone" className="mb-2 font-medium text-slate-500">Phone <span className="text-slate-400">(optional)</span></Label>
                <Input id="contact-phone" name="phone" placeholder="(optional)" inputMode="tel" autoComplete="tel" />
              </div>
            </div>

            {/* Intent - Pill buttons instead of dropdown */}
            <div className="flex flex-col">
              <Label className="mb-3 font-medium">I'd like to…</Label>
              <div className="space-y-2">
                {intentOptions.map(option => (
                  <label key={option.value} className="flex items-start gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors" style={{backgroundColor: selectedIntent === option.value ? '#CCFBF1' : 'transparent', borderColor: selectedIntent === option.value ? '#0F766E' : '#e2e8f0'}}>
                    <input 
                      type="radio" 
                      name="interest" 
                      value={option.value}
                      checked={selectedIntent === option.value}
                      onChange={(e) => {
                        setSelectedIntent(e.target.value)
                      }}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">{option.label}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{option.help}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Message textarea */}
            <div className="flex flex-col">
              <Label htmlFor="contact-message" className="mb-2 font-medium">Tell us about your centres & kit challenges</Label>
              <Textarea 
                id="contact-message" 
                name="message" 
                required 
                rows="4" 
                placeholder="E.g., 'We're a 3-centre network in QLD struggling with manual audits and expired first-aid items. Looking to pilot in 1 centre.'" 
                className="resize-none"
              />
              <p className="text-xs text-slate-500 mt-2">Briefly describe your centres (no. of rooms/locations) and current kit challenges.</p>
            </div>

            {/* CTA Button */}
            <Button 
              disabled={isSubmitting} 
              type="submit" 
              className="w-full bg-sk-primary hover:bg-sk-primaryHover text-white py-3 font-semibold text-base"
            >
              {isSubmitting ? 'Sending…' : getCTALabel()}
            </Button>

            {/* Reassurance text */}
            <p className="text-xs text-slate-500 text-center">
              We'll reply within 1 business day with times and a tailored plan.
            </p>

            {/* Success message */}
            {successMsg && (
              <div role="status" aria-live="polite" className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-900 font-medium mb-1">✓ {successMsg}</p>
                <p className="text-xs text-green-800">Check your inbox for our reply. If you don't see it, check your spam folder.</p>
              </div>
            )}

            {/* Error/mailto fallback */}
            {mailto && (
              <div role="alert" className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-900 font-medium mb-2">We couldn't send automatically. Please email us instead:</p>
                <a className="text-sk-primary hover:underline text-sm break-words font-medium" href={mailto}>
                  Send via email
                </a>
              </div>
            )}
          </form>

          {/* Email fallback below form */}
          <div className="mt-6 pt-6 border-t border-slate-200 text-center">
            <p className="text-xs text-slate-500">
              Prefer email? <a href="mailto:info.safetykit@gmail.com" className="text-sk-primary hover:underline font-medium">info.safetykit@gmail.com</a>
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
