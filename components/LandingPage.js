import ContactForm from './ContactForm';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero */}
      <header className="py-12 text-center bg-gradient-to-b from-blue-50 to-white">
        <img src="/logo.svg" alt="SafetyKit Logo" className="w-20 h-20 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">Modern Safety Management for Every Workplace</h1>
        <p className="text-lg text-gray-600 mb-6">
          Track, audit, and maintain first aid kits and compliance in one place.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">
            Book a Demo
          </a>
          <a href="#contact" className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Contact Us
          </a>
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

      {/* Testimonial */}
      <section className="py-8 text-center">
        <blockquote className="italic text-xl text-gray-700 max-w-2xl mx-auto">
          “SafetyKit made compliance easy for our team!”
        </blockquote>
        <div className="mt-2 text-gray-500">— Early Learning Center, Australia</div>
      </section>

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

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        <nav className="mb-2">
          <a href="#about" className="mx-2 hover:underline">About</a>
          <a href="#privacy" className="mx-2 hover:underline">Privacy</a>
          <a href="#terms" className="mx-2 hover:underline">Terms</a>
          <a href="#contact" className="mx-2 hover:underline">Contact</a>
        </nav>
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
