/**
 * How to Get Started - Simple 3-step onboarding path
 * Makes the adoption journey clear and low-risk
 */

export default function HowToGetStarted() {
  const steps = [
    {
      number: "1",
      title: "Book a 15-Minute Call",
      description: "Chat with a SafetyKit specialist about your centre(s), current challenges, and regulatory requirements. No pressure, no sales pitch.",
      details: ["Understand your current compliance workflow", "Identify quick wins", "Answer all your questions"]
    },
    {
      number: "2",
      title: "Set Up Your Kits & Locations",
      description: "Our team guides you through quick onboarding. Tag your kits with QR codes, set up centres/rooms, and configure your checklists.",
      details: ["Takes 30–60 minutes for your first centre", "We do it together via Zoom or in-person", "Your team gets full access & training"]
    },
    {
      number: "3",
      title: "Run Your 30-Day Pilot",
      description: "Start scanning, tracking, and generating audit-ready reports. Measure results: expiry incidents prevented, time saved, audit readiness.",
      details: ["Full support throughout", "Weekly check-ins", "Measure cost savings & safety improvements"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Start Your SafetyKit Journey
          </h2>
          <p className="text-lg text-slate-600">
            Three simple steps from first conversation to full compliance visibility
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              {/* Step number */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                  {step.number}
                </div>
              </div>

              {/* Step content */}
              <div className="flex-1 bg-white rounded-lg p-5 shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-700 mb-3">{step.description}</p>
                
                {/* Details - compact list */}
                <ul className="space-y-1">
                  {step.details.map((detail, didx) => (
                    <li key={didx} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="text-emerald-600 font-bold mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-3">
            <a href="#contact" className="inline-block bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Book Your 15-Min Call
            </a>
          </div>
          <p className="text-xs text-slate-500">Respond within 2 hours during business hours</p>
        </div>
      </div>
    </section>
  );
}
