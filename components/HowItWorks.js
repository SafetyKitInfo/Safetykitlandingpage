export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Scan & Check Kits Anywhere",
      description: "Mobile scans with offline support. Standardised checklists for every kit, every time.",
      benefits: ["QR/barcode scanning", "Works offline", "Auditable check logs"],
      chip: null,
    },
    {
      number: "2",
      title: "Track Expiry & Issues Automatically",
      description: "Real-time alerts stop expired items before they reach staff or families.",
      benefits: ["Expiry alerts (30/60/90 days out)", "Low-stock warnings", "Maintenance task assignment"],
      chip: "Proactive Engine",
    },
    {
      number: "3",
      title: "Provide Audit-Ready Evidence in Seconds",
      description: "Export timestamped check logs and evidence records on demand. A full historical record to support regulators and auditors.",
      benefits: ["Timestamp-verified check logs", "Audit evidence reports", "Training & certification record trail"],
      chip: null,
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-sk-primary uppercase tracking-widest mb-2 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">How SafetyKit Works</h2>
          <p className="text-lg text-slate-600">Three simple steps from scanning to compliance proof</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sk-primaryLight text-sk-primary font-bold text-4xl">
                  {step.number}
                </div>
                {step.chip && (
                  <span className="text-xs font-semibold text-sk-primary bg-sk-primaryLight px-2 py-0.5 rounded-full">
                    {step.chip}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.benefits.slice(0, 3).map((benefit, bidx) => (
                    <li key={bidx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-sk-success font-bold mt-0.5">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
