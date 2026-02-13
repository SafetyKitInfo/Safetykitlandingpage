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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">How SafetyKit Works</h2>
          <p className="text-lg text-slate-600">Three simple steps from scanning to compliance proof</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Large step number */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-4xl">
                  {step.number}
                </div>
              </div>

              {/* Step content */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{step.description}</p>
                
                {/* Benefits bullets - tight, 3 max */}
                <ul className="space-y-2">
                  {step.benefits.slice(0, 3).map((benefit, bidx) => (
                    <li key={bidx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-emerald-600 font-bold mt-0.5">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow visual on desktop only */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute mt-8 ml-24 text-2xl text-slate-300">→</div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA - optional, can be removed to reduce repetition */}
      </div>
    </section>
  );
}
