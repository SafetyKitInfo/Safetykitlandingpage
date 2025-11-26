import ContactForm from './ContactForm';
import TrustLogos from './TrustLogos';
import Testimonial from './Testimonial';
import Industries from './Industries';
import DeviceFrame from './DeviceFrame';
import FeatureGrid from './FeatureGrid';
import MetricsRow from './MetricsRow';
import CTABand from './CTABand';
import CaseStudyTemplate from './CaseStudyTemplate';
import StickyCTA from './StickyCTA';
import { IconKit, IconClock, IconCheck } from './icons';

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
            <img src="/logo.svg" alt="SafetyKit Tracker" className="w-8 h-8" />
            <div className="text-lg font-semibold">SafetyKit <span className="text-blue-600">Tracker</span></div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#features" className="text-sm text-slate-600 hover:text-slate-900">Features</a>
            <a href="#about" className="text-sm text-slate-600 hover:text-slate-900">About</a>
            <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900">Contact</a>
            <a href="#" className="ml-3 px-4 py-2 bg-white border border-slate-200 rounded text-sm hover:shadow">Sign in</a>
            <a href="#contact" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">Get Started</a>
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
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Eliminate expired kits and cut audit prep from hours to minutes
                <span className="block text-gradient text-blue-600">Keep every centre compliant with automated expiry tracking, kit monitoring, and audit-ready reporting.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">Get clear, real-time visibility across kits, expiries and maintenance—built for EHS, clinical and facilities teams. Reduce audit prep from hours to minutes.</p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md text-sm text-slate-600">
              <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✔</span> Expiry & low-stock alerts</li>
              <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✔</span> Mobile scans & offline support</li>
              <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✔</span> Audit-ready reporting</li>
              <li className="flex items-start gap-3"><span className="mt-1 text-blue-600">✔</span> Certification & training logs</li>
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" role="button" aria-label="Book a demo" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Book a demo</a>
              <a href="#contact" role="button" aria-label="Start free trial" className="inline-block muted-cta px-5 py-3 rounded-lg text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300">Start free trial</a>
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
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/hero-800.webp 800w, /hero-1200.webp 1200w, /hero-1600.webp 1600w"
                    sizes="(max-width: 640px) 800px, (max-width: 1200px) 1200px, 1600px"
                  />
                  <source
                    type="image/jpeg"
                    srcSet="/hero-800.jpg 800w, /hero-1200.jpg 1200w, /hero-1600.jpg 1600w"
                    sizes="(max-width: 640px) 800px, (max-width: 1200px) 1200px, 1600px"
                  />
                  <img
                    src="/hero-1600.jpg"
                    srcSet="/hero-800.jpg 800w, /hero-1200.jpg 1200w, /hero-1600.jpg 1600w"
                    sizes="(max-width: 640px) 800px, (max-width: 1200px) 1200px, 1600px"
                    alt="SafetyKit dashboard preview"
                    className="w-full block"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </DeviceFrame>

              {/* KPI badges overlay */}
              <div className="absolute left-4 top-4 flex flex-col gap-3">
                <div className="bg-white/95 kpi-badge badge-glow px-3 py-2 rounded-lg flex items-center gap-3 border-l-4 border-blue-500 shadow-sm lift-on-hover" role="status" aria-label="Total kits">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><IconKit /></div>
                  <div className="text-sm text-slate-700">Total Kits<span className="block text-xs text-green-600">9 in good condition</span></div>
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

              {/* small CTA badge bottom-right */}
              <a href="#contact" className="absolute right-4 bottom-4 bg-white/95 px-4 py-2 rounded-full text-sm font-medium shadow-sm">Request a demo</a>
            </div>
          </div>
        </div>

        {/* Trusted logos row */}
        <div className="mt-8">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="text-sm text-slate-500">Trusted by</div>
              <img src="/logos/logo1.svg" alt="Customer 1" className="h-6 opacity-90" />
              <img src="/logos/logo2.svg" alt="Customer 2" className="h-6 opacity-90" />
              <img src="/logos/logo3.svg" alt="Customer 3" className="h-6 opacity-90" />
            </div>
            <div className="text-sm text-slate-500">200+ organizations · 1,000,000+ checks</div>
          </div>
        </div>
      </header>

      {/* Features / Product Modules */}
      <FeatureGrid />

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

      {/* Trust / Social Proof */}
      <TrustLogos />
      <Testimonial quote="SafetyKit Tracker saved our team hours in audits and maintenance." by="Head of Operations, Early Learning Centre" logoSrc="/logos/logo1.svg" metric="Saved 15 hours per month on auditing and maintenance" />

      {/* Case studies */}
      <div className="max-w-6xl mx-auto px-4">
        <CaseStudyTemplate
          logo="/logos/logo1.svg"
          title="Harmony Early Learning — Kit Compliance"
          metrics={[{value:'75%', label:'time saved'},{value:'100%', label:'expiry capture'},{value:'30 days', label:'to standardise'}]}
          quote={'"SafetyKit cut our kit checks by 75% and removed expired items entirely." — Centre Director'}
        >
          <p>Harmony Early Learning automated manual checks, centralised records, and now pulls audit reports in seconds. The team rolled out across 12 centres in 30 days.</p>
        </CaseStudyTemplate>
      </div>

      {/* Mid-page CTA band */}
      <CTABand />

      {/* How It Works */}
      <section className="py-12 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">How it works</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-4">
          <div className="p-6">
            <div className="text-3xl text-blue-600 font-bold">1</div>
            <div className="font-semibold mt-2">Scan QR</div>
          </div>
          <div className="p-6">
            <div className="text-3xl text-blue-600 font-bold">2</div>
            <div className="font-semibold mt-2">Track</div>
          </div>
          <div className="p-6">
            <div className="text-3xl text-blue-600 font-bold">3</div>
            <div className="font-semibold mt-2">Stay Compliant</div>
          </div>
        </div>
      </section>

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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0zM7 8h4.8v1.92h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V22h-5v-6.5c0-1.55 0-3.55-2.17-3.55-2.17 0-2.5 1.7-2.5 3.44V22H7V8z"/></svg>
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-gray-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.46 6c-.77.35-1.5.58-2.29.69.82-.5 1.45-1.3 1.75-2.25-.78.46-1.64.8-2.56.98C18.3 4.5 17.27 4 16.12 4c-1.64 0-2.97 1.34-2.97 3 0 .24.03.47.08.69C9.6 7.55 6.2 5.86 3.87 3.1c-.27.46-.42 1-.42 1.57 0 1.03.53 1.95 1.34 2.48-.5-.02-.97-.15-1.38-.38v.04c0 1.5 1.06 2.76 2.46 3.05-.26.07-.53.11-.81.11-.2 0-.4-.02-.6-.06.41 1.3 1.6 2.25 3.01 2.28C6.9 17.4 5.2 18 3.36 18c-.22 0-.44 0-.66-.03C4.8 19.02 6.7 19.6 8.79 19.6c7.45 0 11.54-6.49 11.54-12.1v-.55c.82-.6 1.5-1.35 2.05-2.2-.75.33-1.55.55-2.39.65.86-.52 1.5-1.34 1.8-2.32z"/></svg>
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
