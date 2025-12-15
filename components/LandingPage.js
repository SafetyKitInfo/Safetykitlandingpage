import ContactForm from './ContactForm';
import TrustLogos from './TrustLogos';
import Industries from './Industries';
import DeviceFrame from './DeviceFrame';
import FeatureGrid from './FeatureGrid';
import MetricsRow from './MetricsRow';
import CTABand from './CTABand';
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
      {/* Top nav */}
      <div className="py-6 bg-white/60 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="SafetyKit" className="w-8 h-8" />
            <div className="text-lg font-semibold"><span>Safety</span> <span className="text-blue-600">Kit</span></div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#features" className="text-sm text-slate-600 hover:text-slate-900">Features</a>
            <a href="#about" className="text-sm text-slate-600 hover:text-slate-900">About</a>
            <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900">Contact</a>
            <a href="#" className="ml-3 px-4 py-2 bg-white border border-slate-200 rounded text-sm hover:shadow">Sign in</a>
            <a href="#contact" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">Get Started</a>
          </div>
          <div className="md:hidden">
            <a href="#contact" className="px-3 py-2 bg-blue-600 text-white rounded text-sm">Get Started</a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-emerald-100 to-blue-50 text-emerald-700 px-3 py-1 text-sm rounded-full">Audit-ready. Clinically focused.</span>
            </div>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Eliminate expired kits. Simplify audits.
                <span className="block text-blue-600">Automated expiry tracking and audit-ready reports for every centre.</span>
              </h1>
              <p className="mt-3 text-base text-slate-600 max-w-xl">Gain clear visibility across kits and expiries with mobile checks and automatic alerts.</p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md text-sm text-slate-600">
              <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✔</span> Expiry & low-stock alerts</li>
              <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✔</span> Mobile scans & offline support</li>
              <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✔</span> Audit-ready reporting</li>
              <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✔</span> Certification & training logs</li>
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" role="button" aria-label="Start free trial" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Start Free Trial</a>
              <a href="#contact" role="button" aria-label="Book a demo" className="inline-block border border-slate-200 px-5 py-3 rounded-lg text-sm hover:shadow">Book a demo</a>
              <a href="#features" className="ml-2 text-sm text-slate-500">See features →</a>
            </div>

            <div className="mt-4 text-sm text-slate-500 flex items-center gap-4">
              <div>Secure by design</div>
              <div className="hidden md:block">·</div>
              <div>Offline-ready mobile app</div>
              <div className="hidden md:block">·</div>
              <div>30-day pilot available</div>
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
              <a href="#contact" className="absolute right-4 bottom-4 bg-white/95 px-4 py-2 rounded-full text-sm font-medium shadow-sm hidden sm:inline-block">Request a demo</a>
            </div>
          </div>
        </div>

        {/* Key metrics: visible above the fold for instant credibility */}
        <div className="mt-8">
          <MetricsRow />
        </div>

        {/* Trusted logos row */}
            <div className="mt-8">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 overflow-x-auto py-2">
              <div className="text-sm text-slate-500 flex-shrink-0">Trusted partners</div>
              <img src="/logos/logo1.svg" alt="Partner 1" className="h-6 opacity-90 flex-shrink-0" />
              <img src="/logos/logo2.svg" alt="Partner 2" className="h-6 opacity-90 flex-shrink-0" />
              <img src="/logos/logo3.svg" alt="Partner 3" className="h-6 opacity-90 flex-shrink-0" />
            </div>
            <div className="text-sm text-slate-500">Selected partners and pilot customers</div>
          </div>
        </div>
      </header>

      <StickyCTA />

      {/* Features / Product Modules */}
      <Process />

      {/* Key Metrics */}
      <MetricsRow />

      {/* Personas */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="font-semibold">For EHS Managers</div>
            <div className="text-sm text-slate-500 mt-2">Streamline inspections, reporting and corrective actions across sites.</div>
            <a href="#contact" className="mt-3 inline-block text-sm text-blue-600">Book a demo →</a>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="font-semibold">For Medical Coordinators</div>
            <div className="text-sm text-slate-500 mt-2">Ensure kit readiness, track expiries and manage training records.</div>
            <a href="#contact" className="mt-3 inline-block text-sm text-blue-600">Book a demo →</a>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="font-semibold">For Facilities & Ops</div>
            <div className="text-sm text-slate-500 mt-2">Assign maintenance, reduce downtime and prove compliance fast.</div>
            <a href="#contact" className="mt-3 inline-block text-sm text-blue-600">Book a demo →</a>
          </div>
        </div>
      </section>

      {/* Industries */}
      <Industries />

      {/* Trust / Social Proof removed — no testimonials or case studies shown */}

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
