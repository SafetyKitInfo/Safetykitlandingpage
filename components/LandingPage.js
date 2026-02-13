import ContactForm from './ContactForm';
import TrustLogos from './TrustLogos';
import Industries from './Industries';
import DeviceFrame from './DeviceFrame';
import FeatureGrid from './FeatureGrid';
import MetricsRow from './MetricsRow';
import CTABand from './CTABand';
import HowItWorks from './HowItWorks';
import IssuesVsSolutions from './IssuesVsSolutions';
import TrustAndCompliance from './TrustAndCompliance';
import HowToGetStarted from './HowToGetStarted';
import ECECSpecific from './ECECSpecific';
// Case studies/testimonials removed per request
import StickyCTA from './StickyCTA';
import { IconKit, IconClock, IconCheck } from './icons';
import { Process, Work, Achievements } from './ui/cards-demo';
import DonutChartDemo from './ui/donut-demo';
import { Linkedin, Twitter } from 'lucide-react';
import content from '../content/safetykit-copy.json';

// Utility: small Pill component
function Pill({ children }) {
  return <span className="inline-block bg-white/60 backdrop-blur px-3 py-1 rounded-full text-sm text-gray-700 mx-1 my-1">{children}</span>
}

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Positioning Header: Built for ECEC & Healthcare */}
      <div className="bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 text-center text-sm text-slate-600">
          <span className="font-medium">Built with ECEC and healthcare compliance teams.</span>
        </div>
      </div>

      {/* Hero */}
      <header className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-emerald-100 to-blue-50 text-emerald-700 px-3 py-1 text-sm rounded-full">For ECEC & Healthcare Centres</span>
            </div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Cut expired-kit incidents by 80% in 90 days.
              </h1>
              <p className="mt-4 text-lg text-slate-700 max-w-xl font-medium">Standardise kit checks across every room and centre. No more compliance surprises.</p>
              
              <p className="mt-3 text-base text-slate-600 max-w-xl">Automated expiry alerts, mobile scanning, and audit-ready reports built specifically for early childhood and healthcare compliance teams that can't afford failures.</p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md text-sm text-slate-700">
              <li className="flex items-start gap-3"><span className="mt-1 text-emerald-600 font-bold">✓</span><span><strong>80% fewer</strong> expired incidents</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 text-emerald-600 font-bold">✓</span><span><strong>3-second</strong> kit checks</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 text-emerald-600 font-bold">✓</span><span><strong>Offline</strong> mobile app</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 text-emerald-600 font-bold">✓</span><span><strong>Audit-ready</strong> reports</span></li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" role="button" aria-label="Start 30-day pilot" className="inline-block bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Start 30-day Pilot</a>
              <a href="#contact" role="button" aria-label="Book a demo" className="inline-block border border-slate-300 px-6 py-3 rounded-lg font-semibold text-slate-700 hover:bg-slate-50">Book a Demo</a>
            </div>

            <div className="mt-3 text-xs text-slate-500">
              <p>✓ No credit card required · ✓ Cancel anytime · ✓ Set up in under 10 minutes</p>
            </div>

            <div className="mt-6 text-sm text-slate-600 flex items-center gap-3 flex-wrap">
              <div>🔒 Secure by design</div>
              <div>·</div>
              <div>📱 Offline mobile app</div>
              <div>·</div>
              <div>✓ SOC 2 ready</div>
            </div>
          </div>

            <div className="order-first md:order-last" aria-hidden>
            <div className="relative hero-card device-frame shadow-xl rounded-xl overflow-hidden bg-white">
              <DeviceFrame>
                <img
                  src={(content && content.hero && content.hero.images && content.hero.images[0]) || '/hero.png'}
                  alt="SafetyKit dashboard preview"
                  className="w-full block"
                  loading="lazy"
                />
              </DeviceFrame>

              {/* KPI badges overlay */}
              <div className="absolute left-4 top-4 flex flex-col gap-3 hidden sm:flex">
                <div className="bg-white/95 kpi-badge badge-glow px-3 py-2 rounded-lg flex items-center gap-3 border-l-4 border-blue-500 shadow-sm lift-on-hover" role="status" aria-label="Total kits">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><IconKit /></div>
                  <div className="text-sm text-slate-700">Total Kits<span className="block text-xs text-green-600">kit condition overview</span></div>
                </div>
                <div className="bg-white/95 kpi-badge px-3 py-2 rounded-lg flex items-center gap-3 border-l-4 border-yellow-400 shadow-sm lift-on-hover" role="status" aria-label="Maintenance due">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600"><IconClock /></div>
                  <div className="text-sm text-slate-700">Maintenance Due<span className="block text-xs text-orange-500">Requires attention</span></div>
                </div>
                <div className="bg-white/95 kpi-badge px-3 py-2 rounded-lg flex items-center gap-3 border-l-4 border-emerald-500 shadow-sm lift-on-hover" role="status" aria-label="Compliance ready">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><IconCheck /></div>
                  <div className="text-sm text-slate-700">Compliance Ready<span className="block text-xs text-emerald-600">Excellent · Low risk</span></div>
                </div>
              </div>

              {/* small CTA badge bottom-right (hide on very small screens) */}
              <a href="#contact" className="absolute right-4 bottom-4 bg-white/95 px-4 py-2 rounded-full text-sm font-medium shadow-sm hidden sm:inline-block">Start 30-day Pilot</a>
            </div>
          </div>
        </div>

        {/* Key metrics: visible above the fold for instant credibility */}
        <div className="mt-8">
          <MetricsRow />
        </div>
      </header>

      <StickyCTA />

      {/* Features / Product Modules */}
      <Process />

      {/* How SafetyKit Works - 3-Step Flow */}
      <HowItWorks />

      {/* Common Issues vs Solutions */}
      <IssuesVsSolutions />

      {/* Key Metrics */}
      <MetricsRow />

      {/* Personas with Specific Outcomes */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Teams Choose SafetyKit</h2>
            <p className="text-lg text-slate-600">Tailored outcomes for every role</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* EHS Managers */}
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-700 mb-2">For EHS Managers</div>
              <div className="text-sm text-slate-700 mb-4">See kit readiness across every site in one dashboard.</div>
              
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Single dashboard</strong> for all centres and sites</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Export <strong>audit-ready reports</strong> with 2 clicks</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>80% faster</strong> audit prep time</span>
                </div>
              </div>
              
              <a href="#contact" className="inline-block text-sm font-semibold text-blue-600 hover:underline">Book a demo →</a>
            </div>

            {/* Clinical / Medical Coordinators */}
            <div className="p-6 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="text-2xl font-bold text-emerald-700 mb-2">For Clinical Coordinators</div>
              <div className="text-sm text-slate-700 mb-4">Know which kits need attention before each shift.</div>
              
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Track <strong>medication & first-aid expiry</strong> by room</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Real-time alerts</strong> before incidents occur</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Verify kit readiness</strong> in 90 seconds</span>
                </div>
              </div>
              
              <a href="#contact" className="inline-block text-sm font-semibold text-emerald-600 hover:underline">Book a demo →</a>
            </div>

            {/* Centre / Facilities Managers */}
            <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
              <div className="text-2xl font-bold text-amber-700 mb-2">For Centre Managers</div>
              <div className="text-sm text-slate-700 mb-4">Standardise checks across casual, part-time, and full-time staff.</div>
              
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span">Assign maintenance <strong>tasks & track completion</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Reduce onboarding time</strong> for new staff</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Save 8–12 hours/month</strong> on manual checks</span>
                </div>
              </div>
              
              <a href="#contact" className="inline-block text-sm font-semibold text-amber-700 hover:underline">Book a demo →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <TrustAndCompliance />

      {/* ECEC-Specific Deep Dive */}
      <ECECSpecific />

      {/* Industries - ECEC/Healthcare focused */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-slate-700">Trusted by organisations across</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Early Childhood Centres","Healthcare Clinics","Multi-site Childcare Networks","Medical Practices","Disability & Aged Care","ECEC Training Providers"].map((i, idx) => (
              <span key={idx} className="px-4 py-2 bg-white/70 backdrop-blur rounded-full text-sm text-slate-700 border border-slate-200 shadow-sm">{i}</span>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <HowToGetStarted />

      {/* Mid-page CTA band */}
      <CTABand />

      {/* Contact / Book Demo */}
      <section id="contact" className="py-12 bg-blue-50">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Us / Book a Demo</h2>
        <div className="max-w-lg mx-auto">
          <ContactForm />
        </div>
        <div className="text-center text-xs text-gray-400 mt-2">We respect your privacy. No spam.</div>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm">
        <nav className="mb-2">
          <a href="#about" className="mx-2 hover:underline">About</a>
          <a href="#privacy" className="mx-2 hover:underline">Privacy</a>
          <a href="#terms" className="mx-2 hover:underline">Terms</a>
          <a href="#contact" className="mx-2 hover:underline">Contact</a>
        </nav>

          <div className="flex items-center justify-center gap-4 mb-2">
          <a href="https://www.linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-600">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-gray-600">
            <Twitter size={20} />
          </a>
        </div>

        &copy; {new Date().getFullYear()} SafetyKit. All rights reserved.
      </footer>
    </div>
  );
}

// Helper components
function Feature({ icon, title, desc }) {
  return (
    <div>
      <div className="text-blue-600 text-3xl mb-2">{icon}</div>
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function Step({ number, text }) {
  return (
    <div>
      <div className="text-blue-600 text-2xl font-bold mb-1">{number}</div>
      <div className="font-semibold">{text}</div>
    </div>
  );
}
