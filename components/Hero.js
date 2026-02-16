import React from 'react'
import DeviceFrame from './DeviceFrame'
import { IconCheck } from './icons'

export default function Hero() {
  return (
    <header className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">

        {/* Left column: headline, subhead, outcomes, CTAs */}
        <div className="order-2 md:order-1">
          <div className="mb-4 text-sm font-medium text-emerald-700 uppercase tracking-wide">Built for compliance. Built for trust.</div>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">Reliable kit compliance your teams will actually use</h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl">Reduce expired items, simplify audits, and prove compliance — without extra administrative work.</p>

          {/* Outcomes pill/card */}
          <div className="mt-6 inline-flex items-center rounded-lg bg-slate-50 border border-slate-100 px-4 py-3 shadow-sm">
            <div className="flex gap-4 text-sm text-slate-700">
              <div className="flex items-center gap-2"><IconCheck className="text-emerald-600" /> <span className="font-medium">80% fewer expired incidents</span></div>
              <div className="flex items-center gap-2"><IconCheck className="text-emerald-600" /> <span className="font-medium">~10h saved / month</span></div>
              <div className="flex items-center gap-2"><IconCheck className="text-emerald-600" /> <span className="font-medium">1‑day setup & training</span></div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
            <a href="#get-started" className="inline-block bg-emerald-600 text-white px-5 py-2.5 rounded-lg shadow-sm text-sm font-medium hover:bg-emerald-700">Start 30-day Pilot</a>
            <a href="#contact" className="inline-block border border-emerald-600 text-emerald-600 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-emerald-50">Book a 15‑min Demo</a>
          </div>
          <p className="text-xs text-slate-500 mt-3">No credit card. Cancel anytime.</p>
        </div>

        {/* Right column: device / illustration */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <DeviceFrame className="w-full max-w-md">
            <div className="w-full h-64 md:h-80 bg-gradient-to-br from-slate-100 to-white flex items-center justify-center text-slate-400">
              <svg width="160" height="98" viewBox="0 0 160 98" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect width="160" height="98" rx="8" fill="#f8fafc"/>
                <rect x="12" y="20" width="136" height="14" rx="3" fill="#e6eef9"/>
                <rect x="12" y="40" width="100" height="10" rx="3" fill="#eef6fb"/>
                <rect x="12" y="56" width="80" height="10" rx="3" fill="#f2f8fc"/>
                <circle cx="132" cy="30" r="12" fill="#dbeffd" />
              </svg>
            </div>
          </DeviceFrame>
        </div>
      </div>
    </header>
  )
}
