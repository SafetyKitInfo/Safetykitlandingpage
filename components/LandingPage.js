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
import { Linkedin, Twitter, Monitor, Wifi, Globe } from 'lucide-react';

export default function LandingPage() {
  const heroReadinessScore = 65;
  const HERO_SCORE_RADIUS = 26; // SVG circle radius (px), matched to viewBox 64x64
  const heroScoreCircumference = 2 * Math.PI * HERO_SCORE_RADIUS;
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">

      {/* Top Nav */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/" className="font-bold text-slate-900 text-base tracking-tight">SafetyKit</a>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#how-it-works" className="hover:text-slate-900">Product</a>
            <a href="#who-we-serve" className="hover:text-slate-900">Customers</a>
            <a href="#trust" className="hover:text-slate-900">Security</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-block text-sm text-slate-600 hover:text-slate-900">Start pilot</a>
            <a href="#contact" className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none">Book demo</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="hero" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4">
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">For ECEC &amp; Healthcare Organisations</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-4">
              Eliminate expired first-aid kits across every centre
            </h1>

            <p className="text-lg text-slate-600 max-w-lg leading-relaxed mb-3">
              Standardise kit checks with expiry alerts, mobile scanning, and audit-ready reports for ECEC and healthcare organisations.
            </p>

            <p className="text-sm font-medium text-emerald-700 mb-6">
              Centres typically see up to 80% fewer expired-kit incidents within 90 days.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <a href="#contact" className="inline-block bg-emerald-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-emerald-700 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none text-center">Book a demo</a>
              <a href="#contact" className="inline-block text-slate-600 px-7 py-3 rounded-lg font-medium hover:text-slate-900 text-center underline-offset-4 hover:underline">Start 30-day pilot</a>
            </div>

            <p className="text-xs text-slate-400">
              No credit card required · Cancel anytime · Set up in under 1 day
            </p>
          </div>

          <div className="order-first md:order-last">
            {/* WHS Compliance Dashboard Mockup */}
            <div className="rounded-2xl border border-slate-200 shadow-xl bg-white overflow-hidden text-sm">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800 text-white">
                <span className="font-semibold text-sm">WHS Compliance Dashboard</span>
                <button className="text-xs bg-slate-700 hover:bg-slate-600 px-2.5 py-1 rounded text-slate-200 flex items-center gap-1">
                  <span>↻</span> Sync
                </button>
              </div>

              <div className="p-4 space-y-4 bg-slate-50">
                {/* Readiness Score */}
                <div className="bg-white rounded-xl border border-slate-200 p-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Readiness Score</p>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-shrink-0">
                      <svg width="64" height="64" viewBox="0 0 64 64" aria-label={`Score ${heroReadinessScore} out of 100`}>
                        <circle cx="32" cy="32" r={HERO_SCORE_RADIUS} fill="none" stroke="#fee2e2" strokeWidth="7" />
                        <circle cx="32" cy="32" r={HERO_SCORE_RADIUS} fill="none" stroke="#ef4444" strokeWidth="7"
                          strokeLinecap="round"
                          strokeDasharray={heroScoreCircumference}
                          strokeDashoffset={heroScoreCircumference * (1 - heroReadinessScore / 100)}
                          transform="rotate(-90 32 32)" />
                        <text x="32" y="35" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">{heroReadinessScore}</text>
                      </svg>
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs">/100</div>
                      <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full mt-0.5">Poor</span>
                      <p className="text-xs text-slate-400 mt-0.5">Significant gaps</p>
                    </div>
                  </div>
                </div>

                {/* 3 stat tiles */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white rounded-xl border border-slate-200 p-3 text-center">
                    <div className="text-xs font-semibold text-slate-500 mb-1">Kits Ready</div>
                    <div className="text-lg font-extrabold text-slate-900">4/6</div>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                      <span className="text-xs text-amber-700">2 exp</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl border border-slate-200 p-3 text-center">
                    <div className="text-xs font-semibold text-slate-500 mb-1">Inventory</div>
                    <div className="text-lg font-extrabold text-slate-900">72%</div>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />
                      <span className="text-xs text-orange-700">2 exp</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl border border-slate-200 p-3 text-center">
                    <div className="text-xs font-semibold text-slate-500 mb-1">Certs Valid</div>
                    <div className="text-lg font-extrabold text-slate-900">3/5</div>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                      <span className="text-xs text-red-700">1 exp</span>
                    </div>
                  </div>
                </div>

                {/* Next 3 Actions */}
                <div className="bg-white rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold text-slate-700">Next 3 Actions</p>
                    <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">Proactive Engine</span>
                  </div>
                  <ul className="space-y-2">
                    {["Run 10-min mini-audit","Complete first inspection","Invite additional first aider"].map((action, i) => (
                      <li key={i} className="flex items-center justify-between text-xs text-slate-700 py-1.5 border-b border-slate-50 last:border-0">
                        <span className="flex items-center gap-2">
                          <span className="text-emerald-500 font-bold">►</span>
                          {action}
                        </span>
                        <span className="text-slate-400 font-bold">→</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Metrics strip */}
      <MetricsRow />

      {/* Trusted by */}
      <div className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">Trusted by ECEC &amp; healthcare organisations</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["Sunnydale Early Learning","KinderCare Network","Bright Futures Childcare","MediSafe Clinics"].map((name, i) => (
              <span key={i} className="text-sm font-medium text-slate-400 tracking-tight">{name}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Platform at a glance */}
      <div className="bg-emerald-50 border-y border-emerald-100 py-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
          <span className="flex items-center gap-2"><Monitor size={15} className="text-emerald-500" aria-hidden /> Mobile-first</span>
          <span className="text-slate-300">·</span>
          <span className="flex items-center gap-2"><Wifi size={15} className="text-emerald-500" aria-hidden /> Works offline</span>
          <span className="text-slate-300">·</span>
          <span className="flex items-center gap-2"><Globe size={15} className="text-emerald-500" aria-hidden /> Built for AU/NZ compliance</span>
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

      {/* How SafetyKit Works - 3-Step Flow */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Common Issues vs Solutions */}
      <IssuesVsSolutions />

      {/* Personas with Specific Outcomes */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-2 block">Roles</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Built for every role</h2>
            <p className="text-lg text-slate-600">Tailored workflows and visibility for each team member</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* EHS Managers */}
            <div className="flex flex-col p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-2">EHS Managers</div>
              <p className="text-slate-800 font-medium text-sm mb-4">See kit readiness across every site in one dashboard.</p>
              <ul className="space-y-2 text-sm text-slate-700 flex-1">
                <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">•</span><span><strong>Multi-site dashboard</strong> — live status across all centres</span></li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">•</span><span><strong>2-click reports</strong> — export audit evidence on demand</span></li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">•</span><span><strong>Certification tracking</strong> — first aider records in one place</span></li>
              </ul>
            </div>

            {/* Clinical / Medical Coordinators */}
            <div className="flex flex-col p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-2">Clinical Coordinators</div>
              <p className="text-slate-800 font-medium text-sm mb-4">Know which kits need attention before each shift.</p>
              <ul className="space-y-2 text-sm text-slate-700 flex-1">
                <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">•</span><span><strong>Expiry by room</strong> — track every location independently</span></li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">•</span><span><strong>Proactive alerts</strong> — flagged 30, 60, 90 days before expiry</span></li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">•</span><span><strong>90-second checks</strong> — mobile scanning with offline support</span></li>
              </ul>
            </div>

            {/* Centre / Facilities Managers */}
            <div className="flex flex-col p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-2">Centre Managers</div>
              <p className="text-slate-800 font-medium text-sm mb-4">Standardise checks across all staff with no extra overhead.</p>
              <ul className="space-y-2 text-sm text-slate-700 flex-1">
                <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">•</span><span><strong>Assign tasks</strong> — delegate maintenance and follow-ups</span></li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">•</span><span><strong>Faster onboarding</strong> — guided workflows reduce training time</span></li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">•</span><span><strong>Consistent execution</strong> — same standard across every room</span></li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="#contact" className="inline-block bg-emerald-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-emerald-700 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none">Book a demo</a>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section id="trust">
        <TrustAndCompliance />
      </section>

      {/* Inside the SafetyKit Dashboard */}
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
            {["Early Childhood Centres","Healthcare Clinics","Multi-site Childcare Networks","Medical Practices","Disability & Aged Care","ECEC Training Providers"].map((i, idx) => (
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
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Reduce kit risk across every centre</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">Standardise kit checks, eliminate expired items, and stay audit-ready — without extra overhead.</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-emerald-100 mb-10">
            {["Go paperless","Boost compliance","Reduce expired incidents","Save 8–12h per month"].map((b, i) => (
              <span key={i} className="flex items-center gap-2"><span className="text-emerald-300">✓</span>{b}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contact" className="inline-block bg-white text-emerald-700 px-7 py-3 rounded-lg font-semibold hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:outline-none">Book a demo</a>
            <a href="#contact" className="inline-block border border-emerald-400 text-white px-7 py-3 rounded-lg font-medium hover:bg-emerald-800 text-center">Start 30-day pilot</a>
          </div>
          <p className="text-xs text-emerald-200 mt-4">No credit card required · Set up in under 1 day</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="font-semibold text-white text-sm mb-3">Product</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#how-it-works" className="hover:text-white">How it works</a></li>
                <li><a href="#dashboard" className="hover:text-white">Dashboard</a></li>
                <li><a href="#trust" className="hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white text-sm mb-3">Customers</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#who-we-serve" className="hover:text-white">ECEC Centres</a></li>
                <li><a href="#who-we-serve" className="hover:text-white">Healthcare Clinics</a></li>
                <li><a href="#who-we-serve" className="hover:text-white">Multi-site Networks</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white text-sm mb-3">Company</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white text-sm mb-3">Legal</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#privacy" className="hover:text-white">Privacy</a></li>
                <li><a href="#terms" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs">&copy; {new Date().getFullYear()} SafetyKit. All rights reserved.</p>
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


