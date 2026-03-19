export default function ROIMetrics() {
  const metrics = [
    {
      value: "8–12h",
      label: "Time Saved Per Month",
      tag: "↑ Positive",
      description: "Automated checks and mobile scanning eliminate manual spreadsheet audits.",
    },
    {
      value: "Up to 80%",
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
    <section className="py-20 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-2 block">
            ROI &amp; Time Savings
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Real ROI from Day One
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Measurable results from the first week of using SafetyKit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="relative bg-white rounded-xl border border-emerald-100 shadow-sm overflow-hidden"
            >
              <div className="h-1 w-full bg-emerald-500" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl font-extrabold text-slate-900">{m.value}</div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    {m.tag}
                  </span>
                </div>
                <div className="text-sm font-semibold text-slate-700 mb-1">{m.label}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
