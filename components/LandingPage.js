import ContactForm from './ContactForm';
import TrustLogos from './TrustLogos';
import Testimonial from './Testimonial';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Urgency banner */}
      <div className="bg-amber-50 text-amber-800 text-center py-2 text-sm">
        Limited demo slots available — book a demo to secure your spot.
      </div>

      {/* Hero */}
      <header className="py-12 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-left">
            <img src="/logo.svg" alt="SafetyKit Logo" className="w-20 h-20 mb-4" />
            <h1 className="text-4xl font-bold mb-2">Effortless Safety & Compliance for Modern Workplaces</h1>
            <p className="text-lg text-gray-600 mb-6">Track, audit, and maintain first aid kits and compliance—all in one place.</p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">
                Book a Demo
              </a>
              <a href="#contact" className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Contact Us
              </a>
              <div className="text-sm text-gray-500 mt-2 md:mt-0">No credit card required • Data is secure</div>
            </div>
          </div>

          <div className="flex-1">
            <img src="/hero.svg" alt="SafetyKit product preview" className="mx-auto rounded shadow" />
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center px-4">
          <Feature icon="🩹" title="Real-Time Kit Tracking" desc="Track inventory, get expiry and maintenance reminders." />
          <Feature icon="📋" title="Compliance & Audits" desc="Automated logs and instant compliance reports." />
          <Feature icon="⚠️" title="Incident Management" desc="Log incidents, manage risks, and stay prepared." />
          <Feature icon="☁️" title="Cloud Access" desc="Access your safety data anywhere, anytime." />
        </div>
      </section>

      {/* Trust / Social Proof */}
      <TrustLogos />
      <Testimonial quote="SafetyKit made compliance easy for our team!" by="Early Learning Center, Australia" />

      {/* How It Works */}
      <section className="py-12 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">How it works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-center px-4">
          <Step number={1} text="Scan QR" />
          <Step number={2} text="Track" />
          <Step number={3} text="Stay Compliant" />
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
