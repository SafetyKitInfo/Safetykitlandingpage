export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero */}
      <header className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16">
        <img src="/logo.svg" alt="SafetyKit Logo" className="w-24 h-24 mb-4 mx-auto" />
        <h1 className="text-4xl font-bold mb-2">SafetyKit</h1>
        <p className="text-lg text-gray-600 mb-6">
          The smarter way to manage workplace safety, compliance, and first aid.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Request a Demo
        </a>
      </header>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
          <div>
            <div className="text-blue-600 text-3xl mb-2">🩹</div>
            <h3 className="font-bold mb-1">First Aid Kit Tracking</h3>
            <p className="text-gray-600 text-sm">Real-time inventory and maintenance reminders.</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">📋</div>
            <h3 className="font-bold mb-1">Compliance & Audits</h3>
            <p className="text-gray-600 text-sm">Automated logs and compliance reports.</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">📱</div>
            <h3 className="font-bold mb-1">Cloud Access</h3>
            <p className="text-gray-600 text-sm">Manage safety from any device, anywhere.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SafetyKit. All rights reserved.
      </footer>
    </div>
  );
}
