import React, { useState } from 'react'
import { ContactCard } from './ui/contact-card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react'

// Default to FormSubmit using the activation token so the form is already
// activated. You can still override by setting `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.
// Activation token copied from your FormSubmit email.
const FORMSPREE_ENDPOINT = process?.env?.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formsubmit.co/9a951b8e0817844ac25b7d1ccf0cb563'
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
      // Also send a JSON copy to our internal API so submissions are persisted
      // locally (data/contacts.jsonl). This guarantees you can inspect messages
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
      <div className="max-w-6xl mx-auto px-6">
        <ContactCard
          title="Contact Us / Book a Demo"
          description="Interested in a demo, pilot or quick walkthrough? Tell us a little about your needs and we'll respond within one business day."
          contactInfo={[
            {
              icon: MailIcon,
              label: 'Email',
              value: 'info@safetykit@gmail.com',
            },
            {
              icon: PhoneIcon,
              label: 'Phone',
              value: '+1 (555) 123-4567',
            },
            {
              icon: MapPinIcon,
              label: 'Address',
              value: 'SafetyKit HQ, Healthcare City',
              className: 'md:col-span-2 lg:col-span-3',
            }
          ]}
        >
          <form
            action={USE_FORMSPREE ? FORMSPREE_ENDPOINT : '/api/contact'}
            method={USE_FORMSPREE ? 'POST' : undefined}
            onSubmit={USE_FORMSPREE ? undefined : handleSubmit}
            className="w-full space-y-4"
          >
            {USE_FORMSPREE && (
              <>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New SafetyKit website contact" />
              </>
            )}
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-name">Your name</Label>
              <Input id="contact-name" name="name" required placeholder="Your name" autoComplete="name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-email">Email</Label>
              <Input id="contact-email" name="email" type="email" required placeholder="Email" autoComplete="email" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-org">Organisation (optional)</Label>
              <Input id="contact-org" name="organization" placeholder="Organisation (optional)" autoComplete="organization" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-phone">Phone (optional)</Label>
              <Input id="contact-phone" name="phone" placeholder="Phone (optional)" inputMode="tel" autoComplete="tel" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>I'm interested in</Label>
              <select name="interest" className="p-3 rounded border w-full text-base">
                <option>Book a demo</option>
                <option>Start a 30-day pilot</option>
                <option>Partnerships</option>
                <option>Other / General enquiry</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-message">Tell us how we can help (brief)</Label>
              <Textarea id="contact-message" name="message" required rows="5" placeholder="Tell us how we can help (brief)" />
            </div>
            <Button disabled={isSubmitting} type="submit" className="w-full">
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </Button>
            <span className="text-sm text-slate-600">We typically reply within 1 business day</span>

            {successMsg && (
              <div role="status" aria-live="polite" className="mt-4 p-4 bg-green-50 border rounded">
                <p className="text-sm text-green-900">{successMsg}</p>
              </div>
            )}

            {mailto && (
              <div role="alert" className="mt-4 p-4 bg-yellow-50 border rounded">
                <p className="text-sm text-yellow-900">We couldn't send your message automatically ({errorMsg}). You can still email us directly:</p>
                <a className="block mt-2 text-teal-600 underline break-words" href={mailto}>Compose email to info@safetykit@gmail.com</a>
              </div>
            )}
          </form>
        </ContactCard>
      </div>
    </section>
  )
}
