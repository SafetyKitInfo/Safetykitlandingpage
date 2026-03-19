/**
 * How to Get Started - Simple 3-step onboarding path
 */

export default function HowToGetStarted() {
  const steps = [
    {
      number: "1",
      title: "Book a discovery call",
      description: "A short call to understand your centres, workflows, and regulatory context. We'll outline a setup plan tailored to your organisation.",
      details: ["Understand your current compliance workflow", "Identify quick wins for your specific centres", "No obligation — answer your questions first"]
    },
    {
      number: "2",
      title: "Set up your kits and locations",
      description: "Our team guides you through onboarding. Tag kits with QR codes, configure centres and rooms, and set up checklists.",
      details: ["Takes 30–60 minutes for your first centre", "Remote or in-person — your choice", "Your team gets full access and training on day one"]
    },
    {
      number: "3",
      title: "Run your 30-day pilot",
      description: "Start scanning, tracking, and generating audit-ready reports. Measure expiry incidents prevented, time saved, and audit readiness.",
      details: ["Full support throughout the pilot", "Weekly check-ins with your success manager", "Clear metrics at the end to evaluate value"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Get started in three steps
          </h2>
          <p className="text-lg text-slate-600">
            From first conversation to full compliance visibility in under a week
          </p>
        </div>

        <div className="space-y-5 mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-base">
                  {step.number}
                </div>
              </div>

              <div className="flex-1 bg-white rounded-lg p-5 shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-1.5">{step.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{step.description}</p>
                <ul className="space-y-1">
                  {step.details.map((detail, didx) => (
                    <li key={didx} className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-3">
            <a href="#contact" className="inline-block bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none">
              Book a demo
            </a>
            <a href="#contact" className="inline-block border border-slate-300 text-slate-700 px-7 py-3 rounded-lg font-medium hover:bg-slate-50">
              Start 30-day Pilot
            </a>
          </div>
          <p className="text-xs text-slate-400">We'll reply within 1 business day.</p>
        </div>
      </div>
    </section>
  );
}
