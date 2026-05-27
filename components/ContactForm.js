import React from 'react'
import { CheckCircle } from 'lucide-react'

const WAITLIST_URL = 'https://tally.so/r/rj0JrX'

export default function ContactForm() {
  const benefits = [
    {
      title: 'Join the waitlist',
      detail: 'Be first to hear when new spots open up for demos and pilots.'
    },
    {
      title: 'Get priority access',
      detail: 'We will reach out in the order requests are received.'
    },
    {
      title: 'Stay in the loop',
      detail: 'Hear about product updates, onboarding, and launch timing.'
    }
  ]

  return (
    <section id="contact" className="py-12 md:py-20 bg-sk-surfaceMuted">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sk-primary mb-2">Waitlist</p>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3">Join the waitlist</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sign up to be first in line for SafetySight updates, pilots, and early access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          <div className="bg-[#073548] rounded-xl p-6 md:p-8 text-white">
            <h3 className="text-lg font-bold mb-5 md:mb-6">What you get</h3>
            <ul className="space-y-4 md:space-y-5">
              {benefits.map((item) => (
                <li key={item.title} className="flex items-start gap-2 md:gap-3">
                  <CheckCircle size={16} className="text-[#37d5ca] flex-shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-[#d9f4f3] mt-0.5 leading-snug">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/15">
              <p className="text-xs text-[#a8f3ef] leading-snug">No credit card required · Reply within 1 business day</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8 flex flex-col justify-center">
            <div className="space-y-4 text-left">
              <p className="text-slate-700 text-sm leading-relaxed">
                Share a few details in the waitlist form and we will follow up with next steps.
              </p>
              <a
                href={WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-sk-primary hover:bg-sk-primaryHover text-white py-3 px-6 rounded-lg font-semibold text-base focus-visible:ring-2 focus-visible:ring-sk-primary focus-visible:outline-none"
              >
                Join the waitlist
              </a>
              <p className="text-xs text-slate-500 text-center">
                Prefer email? <a href="mailto:info.safetykit@gmail.com" className="text-sk-primary hover:underline font-medium">info.safetykit@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
