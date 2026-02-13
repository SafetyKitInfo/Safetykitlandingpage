/**
 * How SafetyKit Works - 3-step flow
 * Shows the process from scanning to compliance proof
 */

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Scan & Check Kits Anywhere",
      description: "Mobile scans with offline support. Standardised checklists for every kit, every time.",
      benefits: ["QR/barcode scanning", "Works offline", "Auditable check logs"]
    },
    {
      number: "2", 
      title: "Track Expiry & Issues Automatically",
      description: "Real-time alerts stop expired items before they reach staff or families.",
      benefits: ["Expiry alerts (30/60/90 days out)", "Low-stock warnings", "Maintenance task assignment"]
    },
    {
      number: "3",
      title: "Prove Compliance in Seconds",
      description: "Audit-ready reports exported on demand. Full historical record for regulators.",
      benefits: ["Timestamp-verified check logs", "Compliance-ready reports", "Training & certification audit trail"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How SafetyKit Works</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">A simple 3-step process that turns kit compliance from chaotic into systematic.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Step number badge */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                  {step.number}
                </div>
              </div>

              {/* Step content */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 mb-4">{step.description}</p>
                
                {/* Benefits list */}
                <ul className="space-y-2">
                  {step.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow for mobile/tablet spacing */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute top-6 -right-4 text-2xl text-slate-300">→</div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Ready to see how SafetyKit works in your centre?</p>
          <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Schedule a 15-minute Demo
          </a>
        </div>
      </div>
    </section>
  );
}
