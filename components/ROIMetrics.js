export default function ROIMetrics() {
  const metrics = [
    {
      value: "8–12h",
      label: "Time Saved Per Month",
      tag: "↑ Positive",
      description: "Automated checks and mobile scanning eliminate manual spreadsheet audits.",
    },
    {
      value: "80%",
      label: "Fewer Expired Incidents",
      tag: "↑ Improving",
      description: "Proactive expiry alerts catch issues weeks before they become compliance failures.",
    },
    {
      value: "15–20%",
      label: "Reduction in Stock Waste",
      tag: "↑ Positive",
      description: "Smart reorder suggestions and inventory tracking prevent over-ordering.",
    },
    {
      value: "1 Day",
      label: "Setup & Training Time",
      tag: "✓ Fast Onboarding",
      description: "Guided onboarding with full support means your team is live within 24 hours.",
    },
  ];

  return (
    <section className="py-20 bg-sk-surfaceMuted">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-sk-primary uppercase tracking-widest mb-2 block">
            ROI &amp; Time Savings
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Real ROI from Day One
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Measurable results from the first week of using SafetyKit.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="relative bg-white rounded-xl border border-sk-border shadow-sm overflow-hidden text-center"
            >
              <div className="h-1 w-full bg-sk-primary" />
              <div className="px-4 py-6">
                <div className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-1 leading-none">{m.value}</div>
                <div className="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-3 leading-snug">{m.label}</div>
                <span className="inline-block text-xs font-semibold text-sk-success bg-sk-successLight px-2 py-0.5 rounded-full mb-3">
                  {m.tag}
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
