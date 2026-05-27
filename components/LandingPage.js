import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import MetricsRow from './MetricsRow';
import HowItWorks from './HowItWorks';
import IssuesVsSolutions from './IssuesVsSolutions';
import TrustAndCompliance from './TrustAndCompliance';
import HowToGetStarted from './HowToGetStarted';
import ECECSpecific from './ECECSpecific';
import DashboardModules from './DashboardModules';
import StickyCTA from './StickyCTA';
import ProactiveEngine from './ProactiveEngine';
import ReadinessScore from './ReadinessScore';
import ROIMetrics from './ROIMetrics';
import RiskTrend from './RiskTrend';
import InventoryHealth from './InventoryHealth';
import { Process } from './ui/cards-demo';
import { Linkedin, Twitter, Monitor, Wifi, Globe, BarChart2, Activity, Users, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const appVersion = process.env.NEXT_PUBLIC_APP_VERSION || '';
  const signInHref = `https://app.safetysight.net/safetysight-auth?_v=${encodeURIComponent(appVersion)}`;
  const heroReadinessScore = 65;
  const HERO_SCORE_RADIUS = 26; // SVG circle radius (px), matched to viewBox 64x64
  const heroScoreCircumference = 2 * Math.PI * HERO_SCORE_RADIUS;
  const remotionEase = [0.16, 1, 0.3, 1];
  const heroSequence = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };
  const revealUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.72, ease: remotionEase },
    },
  };
  return (
    <div className="min-h-screen flex flex-col bg-[#f6faf9] text-[#102a43]">

      {/* Top Nav */}
      <nav className="sticky top-0 z-40 border-b border-[#d8e7ea]/80 bg-white/92 backdrop-blur-xl relative shadow-[0_1px_20px_rgba(8,70,91,0.06)]">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/images/safetysight-rectangle.png" alt="SafetySight" className="h-10 sm:h-12" />
          </a>
          <div className="hidden md:flex items-center gap-1 rounded-full border border-[#d8e7ea] bg-[#f6faf9]/90 p-1 text-sm text-slate-600">
            <a href="#how-it-works" className="rounded-full px-4 py-1.5 hover:bg-white hover:text-[#102a43] hover:shadow-sm">Product</a>
            <a href="#who-we-serve" className="rounded-full px-4 py-1.5 hover:bg-white hover:text-[#102a43] hover:shadow-sm">Customers</a>
            <a href="#trust" className="rounded-full px-4 py-1.5 hover:bg-white hover:text-[#102a43] hover:shadow-sm">Security</a>
            <a href="#contact" className="rounded-full px-4 py-1.5 hover:bg-white hover:text-[#102a43] hover:shadow-sm">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:bg-slate-100"
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <a href="#contact" className="hidden sm:inline-block text-sm font-medium text-slate-600 hover:text-[#102a43]">Start pilot</a>
            <a href={signInHref} className="hidden sm:inline-flex items-center justify-center text-sm font-semibold px-4 py-2 rounded-full border border-[#cbdde2] text-[#102a43] bg-white hover:bg-[#f6faf9] hover:border-sk-primary focus-visible:ring-2 focus-visible:ring-sk-primary focus-visible:outline-none">Sign in</a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-sk-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-sk-primaryHover focus-visible:ring-2 focus-visible:ring-sk-primary focus-visible:outline-none shadow-sm shadow-sky-950/20">Book demo <ArrowRight size={14} aria-hidden /></a>
          </div>
        </div>
        {/* Mobile menu panel */}
        <div className={`md:hidden ${mobileOpen ? 'block' : 'hidden'} border-t border-slate-200 bg-white`}>
          <div className="px-4 py-3 space-y-2">
            <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="block py-2 text-base text-slate-800">Product</a>
            <a href="#who-we-serve" onClick={() => setMobileOpen(false)} className="block py-2 text-base text-slate-800">Customers</a>
            <a href="#trust" onClick={() => setMobileOpen(false)} className="block py-2 text-base text-slate-800">Security</a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="block py-2 text-base text-slate-800">Contact</a>
            <div className="pt-2">
              <a href={signInHref} onClick={() => setMobileOpen(false)} className="block w-full text-center border border-slate-300 text-slate-700 bg-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-50">Sign in</a>
            </div>
            <div className="pt-2">
              <a href="#contact" onClick={() => setMobileOpen(false)} className="block w-full text-center bg-sk-primary text-white px-4 py-2 rounded-lg font-semibold">Book demo</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="hero" className="relative overflow-hidden bg-[linear-gradient(180deg,#f6faf9_0%,#ffffff_56%,#edf7f6_100%)]">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 pt-14 pb-16 md:pt-24 md:pb-24 grid grid-cols-1 md:grid-cols-[0.92fr_1.08fr] gap-10 md:gap-16 items-center">
          <motion.div variants={heroSequence} initial="hidden" animate="show">
            <motion.div variants={revealUp} className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#b9e7ea] bg-white px-3 py-1.5 text-xs font-bold text-sk-primary shadow-sm">
                <ShieldCheck size={14} aria-hidden />
                For SMEs &amp; Australian Businesses
              </span>
              <span className="inline-flex items-center rounded-full bg-[#eef8ff] px-3 py-1.5 text-xs font-bold text-[#0b5f78] ring-1 ring-[#c9e7f5]">Early access open</span>
            </motion.div>

            <motion.h1 variants={revealUp} className="max-w-2xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.96] text-[#102a43] mb-6 tracking-tight">
              First Aid Kit Compliance Software for Every Centre
            </motion.h1>

            <motion.p variants={revealUp} className="text-base md:text-xl text-[#506575] max-w-xl leading-relaxed mb-5">
              SafetySight is first aid kit compliance software built for SMEs across Australia. Standardise kit checks with expiry alerts, mobile scanning, and audit-ready reports.
            </motion.p>

            <motion.div variants={revealUp} className="mb-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                "Expiry alerts",
                "Mobile scanning",
                "Audit-ready reports",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -3, transition: { duration: 0.2, ease: remotionEase } }}
                  className="flex items-center gap-2 rounded-lg border border-[#d8e7ea] bg-white/85 px-3 py-2 text-sm font-semibold text-[#102a43] shadow-sm"
                >
                  <CheckCircle2 size={16} className="text-sk-success" aria-hidden />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={revealUp} className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="https://tally.so/r/rj0JrX" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sk-primary text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-sk-primaryHover focus-visible:ring-2 focus-visible:ring-sk-primary focus-visible:outline-none text-center shadow-lg shadow-sky-950/20">Join Waitlist <ArrowRight size={18} aria-hidden /></a>
              <a href="#how-it-works" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#cbdde2] bg-white px-8 py-3.5 rounded-full font-bold text-base text-[#102a43] hover:border-sk-primary hover:bg-[#f6faf9] focus-visible:ring-2 focus-visible:ring-sk-primary focus-visible:outline-none text-center shadow-sm">See product</a>
            </motion.div>

            <motion.p variants={revealUp} className="flex items-center gap-2 text-sm font-semibold text-[#506575]">
              <Zap size={16} className="text-sk-accent" aria-hidden />
              Centres can significantly reduce expired-kit incidents within the first 90 days.
            </motion.p>
          </motion.div>

          <div>
            {/* WHS Readiness Dashboard Mockup — simplified for clarity */}
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.12, ease: remotionEase }}
              className="w-full max-w-xl mx-auto rounded-[1.75rem] border border-white/80 bg-white/80 p-2 shadow-[0_24px_70px_rgba(15,23,42,0.18)] backdrop-blur"
            >
            <div className="dashboard-sheen overflow-hidden rounded-[1.35rem] border border-slate-200 text-sm">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#073548] bg-[#073548] px-5 py-4 text-white">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-[#a8f3ef]">SafetySight</span>
                  <span className="font-semibold text-sm">WHS Readiness Dashboard</span>
                </div>
                <span className="text-xs bg-[#a8f3ef] text-[#073548] font-bold px-2.5 py-1 rounded-full">Live</span>
              </div>

              <div className="grid gap-4 p-5 bg-[#f6faf9]/95 sm:grid-cols-[1fr_0.88fr]">
                {/* Readiness Score — hero element */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.62, delay: 0.38, ease: remotionEase }}
                  className="rounded-2xl border border-[#d8e7ea] bg-white p-5 shadow-sm sm:row-span-2"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Readiness Score</p>
                    <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-bold text-red-700">Action needed</span>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="relative flex-shrink-0">
                      <svg width="116" height="116" viewBox="0 0 64 64" aria-label={`Score ${heroReadinessScore} out of 100`}>
                        <circle cx="32" cy="32" r={HERO_SCORE_RADIUS} fill="none" stroke="#fee2e2" strokeWidth="7" />
                        <circle cx="32" cy="32" r={HERO_SCORE_RADIUS} fill="none" stroke="#ef4444" strokeWidth="7"
                          strokeLinecap="round"
                          strokeDasharray={heroScoreCircumference}
                          strokeDashoffset={heroScoreCircumference * (1 - heroReadinessScore / 100)}
                          transform="rotate(-90 32 32)" />
                        <text x="32" y="33" textAnchor="middle" fontSize="15" fontWeight="800" fill="#0f172a">{heroReadinessScore}</text>
                        <text x="32" y="44" textAnchor="middle" fontSize="8" fill="#64748b">/100</text>
                      </svg>
                    </div>
                    <div>
                      <span className="inline-block bg-red-100 text-red-700 text-sm font-bold px-3 py-1 rounded-full mb-2">Poor</span>
                      <p className="text-sm text-slate-500 leading-snug">Significant gaps present.<br/>Improvement actions queued.</p>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {[
                      ["18", "Items due"],
                      ["6", "Sites"],
                      ["2m", "Scan time"],
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-xl bg-[#f6faf9] px-3 py-2 text-center ring-1 ring-[#d8e7ea]/70">
                        <div className="text-lg font-black text-[#102a43]">{value}</div>
                        <div className="text-[11px] font-semibold text-slate-500">{label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Next 3 Actions */}
                <motion.div
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.62, delay: 0.52, ease: remotionEase }}
                  className="rounded-2xl border border-[#d8e7ea] bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-slate-700">Next 3 Actions</p>
                    <span className="text-xs bg-sk-primaryLight text-sk-primary font-semibold px-2.5 py-1 rounded-full">Proactive Engine</span>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      "Run 10-min mini-audit",
                      "Complete first inspection",
                      "Invite additional first aider",
                    ].map((label, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-slate-700 py-1.5 border-b border-slate-50 last:border-0">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sk-primary text-white text-[10px] font-bold flex-shrink-0">{i + 1}</span>
                        <span className="flex-1">{label}</span>
                        <ArrowRight size={14} className="text-slate-300" aria-hidden />
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.62, delay: 0.66, ease: remotionEase }}
                  className="rounded-2xl border border-[#073548] bg-[#073548] p-5 text-white shadow-sm"
                >
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#a8f3ef]">This week</p>
                  <div className="flex items-end justify-between gap-2">
                    {[42, 58, 47, 72, 66, 84, 76].map((height, i) => (
                      <span
                        key={i}
                        className="hero-bar w-full rounded-t bg-[#37d5ca]"
                        style={{ '--bar-height': `${height}px`, animationDelay: `${0.08 * i}s` }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-300">
                    <span>Inspections</span>
                    <span className="text-[#a8f3ef]">+24%</span>
                  </div>
                </motion.div>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Metrics strip */}
      <MetricsRow />

      {/* Platform at a glance */}
      <div className="bg-white border-y border-slate-200 py-5 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 gap-3 text-sm font-semibold text-[#506575] sm:grid-cols-3">
          <span className="flex items-center justify-center gap-2 rounded-lg bg-[#f6faf9] px-4 py-3"><Monitor size={16} className="text-sk-accent" aria-hidden /> Mobile-first</span>
          <span className="flex items-center justify-center gap-2 rounded-lg bg-[#f6faf9] px-4 py-3"><Wifi size={16} className="text-sk-accent" aria-hidden /> Works offline</span>
          <span className="flex items-center justify-center gap-2 rounded-lg bg-[#f6faf9] px-4 py-3"><Globe size={16} className="text-sk-accent" aria-hidden /> AU/NZ WHS support</span>
        </div>
      </div>

      <StickyCTA />

      {/* Features / Product Modules */}
      <Process />

      {/* Proactive Engine */}
      <ProactiveEngine />

      {/* Readiness Score */}
      <ReadinessScore />

      {/* ROI Metrics */}
      <ROIMetrics />

      {/* Risk Trend */}
      <RiskTrend />

      {/* Inventory Health */}
      <InventoryHealth />

      {/* How SafetySight Works - 3-Step Flow */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Common Issues vs Solutions */}
      <IssuesVsSolutions />

      {/* Personas with Specific Outcomes */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-xs font-semibold text-sk-primary uppercase tracking-widest mb-2 block">Roles</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Built for every role</h2>
            <p className="text-base md:text-lg text-slate-600">Tailored workflows and visibility for each team member</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* EHS Managers */}
            <div className="flex flex-col rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-1.5 bg-sk-primary" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-sk-primaryLight flex items-center justify-center flex-shrink-0">
                    <BarChart2 size={16} className="text-sk-primary" aria-hidden />
                  </div>
                  <div className="text-xs font-semibold text-sk-primary uppercase tracking-wide">EHS Managers</div>
                </div>
                <p className="text-slate-800 font-medium text-sm mb-4">See kit readiness across every site in one dashboard.</p>
                <ul className="space-y-2 text-sm text-slate-700 flex-1">
                  <li className="flex items-start gap-2"><span className="text-sk-success mt-0.5">•</span><span><strong>Multi-site dashboard</strong> — live status across all centres</span></li>
                  <li className="flex items-start gap-2"><span className="text-sk-success mt-0.5">•</span><span><strong>2-click reports</strong> — export audit evidence on demand</span></li>
                  <li className="flex items-start gap-2"><span className="text-sk-success mt-0.5">•</span><span><strong>Certification tracking</strong> — first aider records in one place</span></li>
                </ul>
              </div>
            </div>

            {/* Clinical / Medical Coordinators */}
            <div className="flex flex-col rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-1.5 bg-sk-accent" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-sk-primaryLight flex items-center justify-center flex-shrink-0">
                    <Activity size={16} className="text-sk-accent" aria-hidden />
                  </div>
                  <div className="text-xs font-semibold text-sk-primary uppercase tracking-wide">Clinical Coordinators</div>
                </div>
                <p className="text-slate-800 font-medium text-sm mb-4">Know which kits need attention before each shift.</p>
                <ul className="space-y-2 text-sm text-slate-700 flex-1">
                  <li className="flex items-start gap-2"><span className="text-sk-success mt-0.5">•</span><span><strong>Expiry by room</strong> — track every location independently</span></li>
                  <li className="flex items-start gap-2"><span className="text-sk-success mt-0.5">•</span><span><strong>Proactive alerts</strong> — flagged 30, 60, 90 days before expiry</span></li>
                  <li className="flex items-start gap-2"><span className="text-sk-success mt-0.5">•</span><span><strong>90-second checks</strong> — mobile scanning with offline support</span></li>
                </ul>
              </div>
            </div>

            {/* Centre / Facilities Managers */}
            <div className="flex flex-col rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-1.5 bg-sky-400" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center flex-shrink-0">
                    <Users size={16} className="text-sky-700" aria-hidden />
                  </div>
                  <div className="text-xs font-semibold text-sky-800 uppercase tracking-wide">Centre Managers</div>
                </div>
                <p className="text-slate-800 font-medium text-sm mb-4">Standardise checks across all staff with no extra overhead.</p>
                <ul className="space-y-2 text-sm text-slate-700 flex-1">
                  <li className="flex items-start gap-2"><span className="text-sk-success mt-0.5">•</span><span><strong>Assign tasks</strong> — delegate maintenance and follow-ups</span></li>
                  <li className="flex items-start gap-2"><span className="text-sk-success mt-0.5">•</span><span><strong>Faster onboarding</strong> — guided workflows reduce training time</span></li>
                  <li className="flex items-start gap-2"><span className="text-sk-success mt-0.5">•</span><span><strong>Consistent execution</strong> — same standard across every room</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="https://tally.so/r/rj0JrX" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-block bg-sk-primary text-white px-7 py-3 rounded-lg font-semibold hover:bg-sk-primaryHover focus-visible:ring-2 focus-visible:ring-sk-primary focus-visible:outline-none">Join Waitlist</a>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section id="trust">
        <TrustAndCompliance />
      </section>

      {/* Inside the SafetySight Dashboard */}
      <DashboardModules />

      {/* ECEC-Specific Deep Dive */}
      <ECECSpecific />

      {/* Who we serve */}
      <section id="who-we-serve" className="py-10 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-5">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Who we serve</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Trades & Construction","Retail & Hospitality","Professional Services","Healthcare Clinics","Childcare Centres","Multi-site SMEs"].map((i, idx) => (
              <span key={idx} className="px-4 py-2 bg-white rounded-full text-sm text-slate-700 border border-slate-200 shadow-sm">{i}</span>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <HowToGetStarted />

      {/* Contact / Book Demo */}
      <ContactForm />

      {/* Final CTA band */}
      <section className="py-16 md:py-24 bg-[#073548] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">Reduce kit risk across every centre</h2>
          <p className="text-[#d9f4f3] text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed">Standardise kit checks, reduce expired items, and improve audit readiness — without extra overhead.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-5 text-sm text-[#d9f4f3] mb-8 md:mb-10">
            {["Go paperless","Boost compliance","Fewer expired incidents"].map((b, i) => (
              <span key={i} className="flex items-center gap-2"><span className="text-[#37d5ca] font-bold">✓</span><span>{b}</span></span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://tally.so/r/rj0JrX" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-block bg-white text-sk-primary px-8 py-3.5 rounded-lg font-bold text-base hover:bg-sk-surfaceMuted focus-visible:ring-2 focus-visible:ring-sk-primary focus-visible:outline-none shadow-md">Join Waitlist</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#061f2d] text-slate-400 py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-10">
            <div>
              <div className="font-semibold text-white text-xs md:text-sm mb-3">Product</div>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li><a href="#how-it-works" className="hover:text-white">How it works</a></li>
                <li><a href="#dashboard" className="hover:text-white">Dashboard</a></li>
                <li><a href="#trust" className="hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white text-xs md:text-sm mb-3">Customers</div>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li><a href="#who-we-serve" className="hover:text-white">SMEs</a></li>
                <li><a href="#who-we-serve" className="hover:text-white">Healthcare Clinics</a></li>
                <li><a href="#who-we-serve" className="hover:text-white">Multi-site Networks</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white text-xs md:text-sm mb-3">Company</div>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white text-xs md:text-sm mb-3">Legal</div>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li><a href="#privacy" className="hover:text-white">Privacy</a></li>
                <li><a href="#terms" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} SafetySight. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com" aria-label="LinkedIn" className="hover:text-white">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-white">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
