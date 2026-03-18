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
import DashboardModules from './DashboardModules';
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
      <header className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Credibility tag - eyebrow position */}
            <div className="mb-6">
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">For ECEC & Healthcare Centres</span>
            </div>

            {/* Primary headline - clear, single message */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-4">
              Typically cut expired-kit incidents by up to 80% in 90 days.
            </h1>

            {/* Subheading - supporting context */}
            <p className="text-lg text-slate-700 max-w-lg leading-relaxed mb-4">
              Standardise kit checks across every room and centre with automated expiry alerts, mobile scanning, and audit-ready reports.
            </p>

            {/* Guidance disclaimer - mirrors app language */}
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              SafetyKit is a guidance and record-keeping tool for tracking kit checks, inventory, and training — not a legal authority or replacement for your WHS obligations.
            </p>

            {/* Hero benefits - 3 core only, clean layout */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-lg mt-1">✓</span>
                <div><span className="font-semibold text-slate-900">Up to 80% fewer</span> expired incidents</div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-lg mt-1">✓</span>
                <div>Complete kit checks in <span className="font-semibold text-slate-900">3 seconds</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-lg mt-1">✓</span>
                <div><span className="font-semibold text-slate-900">Works offline</span> anywhere, anytime</div>
              </div>
            </div>

            {/* Primary CTAs - two buttons only, clearly grouped */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href="#contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 text-center">Start 30-day Pilot</a>
              <a href="#contact" className="inline-block border-2 border-slate-300 text-slate-900 px-7 py-2 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 text-center">Book a 15-min Demo</a>
            </div>

            {/* Reassurance text - separate from CTAs */}
            <p className="text-xs text-slate-500">
              No credit card required · Cancel anytime · Usually set up in under 10 minutes
            </p>
          </div>

            <div className="order-first md:order-last">
            <div className="relative hero-card device-frame shadow-xl rounded-xl overflow-hidden bg-white border border-slate-200">
              <DeviceFrame>
                <img
                  src={(content && content.hero && content.hero.images && content.hero.images[0]) || '/hero.png'}
                  alt="SafetyKit dashboard showing kit compliance status"
                  className="w-full block"
                  loading="lazy"
                />
              </DeviceFrame>

              {/* Status indicator badges */}
              <div className="absolute left-4 top-4 flex gap-2 hidden sm:flex">
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold rounded-full">Compliance support · Lower risk</span>
              </div>
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

      {/* Key Metrics - moved higher for early social proof */}
      <MetricsRow />

      {/* Common Issues vs Solutions */}
      <IssuesVsSolutions />

      {/* Personas with Specific Outcomes */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Why Teams Choose SafetyKit</h2>
            <p className="text-lg text-slate-600">Tailored for every role</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* EHS Managers */}
            <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sm font-bold text-blue-700 uppercase tracking-wide mb-2">For EHS Managers</div>
              <p className="text-slate-700 font-medium text-sm mb-4">See kit readiness across every site in one dashboard.</p>
              
              <ul className="space-y-2 mb-5 text-xs text-slate-700">
                <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span><span><strong>Single dashboard</strong> for all centres</span></li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span><span><strong>2-click reports</strong> for auditors</span></li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span><span><strong>80% faster</strong> audit prep</span></li>
              </ul>
              
              <a href="#contact" className="inline-block text-sm font-semibold text-blue-600 hover:underline">Book a demo</a>
            </div>

            {/* Clinical / Medical Coordinators */}
            <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sm font-bold text-emerald-700 uppercase tracking-wide mb-2">For Clinical Coordinators</div>
              <p className="text-slate-700 font-medium text-sm mb-4">Know which kits need attention before each shift.</p>
              
              <ul className="space-y-2 mb-5 text-xs text-slate-700">
                <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span><span>Track <strong>expiry by room</strong></span></li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span><span><strong>Real-time alerts</strong> before issues</span></li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span><span><strong>90-second</strong> kit checks</span></li>
              </ul>
              
              <a href="#contact" className="inline-block text-sm font-semibold text-emerald-600 hover:underline">Book a demo</a>
            </div>

            {/* Centre / Facilities Managers */}
            <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sm font-bold text-amber-700 uppercase tracking-wide mb-2">For Centre Managers</div>
              <p className="text-slate-700 font-medium text-sm mb-4">Standardise checks across all staff.</p>
              
              <ul className="space-y-2 mb-5 text-xs text-slate-700">
                <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span><span>Assign <strong>maintenance tasks</strong></span></li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span><span><strong>Faster onboarding</strong> for staff</span></li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span><span><strong>8–12 hrs saved</strong> per month</span></li>
              </ul>
              
              <a href="#contact" className="inline-block text-sm font-semibold text-amber-700 hover:underline">Book a demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <TrustAndCompliance />

      {/* Inside the SafetyKit Dashboard - real module names */}
      <DashboardModules />

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
