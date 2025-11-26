export default function Hero() {
  return (
    <header className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="SafetyKit" className="w-16 h-16" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">SafetyKit</h1>
            <p className="text-sm text-gray-500">Smart safety tools for everyday peace of mind.</p>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">Reliable safety, simply delivered</h2>
          <p className="mt-4 text-gray-600">SafetyKit helps organizations and individuals manage safety checklists, alerts, and resources with a lightweight, easy-to-use interface.</p>

          <div className="mt-6 flex gap-4">
            <a href="#contact" className="inline-block bg-teal-500 text-white px-5 py-3 rounded-md shadow hover:bg-teal-600">Get Started</a>
            <a href="#features" className="inline-block border border-teal-500 text-teal-600 px-5 py-3 rounded-md hover:bg-teal-50">See Features</a>
          </div>
        </div>
      </div>
    </header>
  )
}
