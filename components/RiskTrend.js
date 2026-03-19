export default function RiskTrend() {
  const tiles = [
    {
      title: "Incident Trends",
      status: "Increasing",
      statusColor: "bg-amber-100 text-amber-700",
      detail: "3 near-miss events this quarter",
      icon: "⚠️",
    },
    {
      title: "Expiry Breaches",
      status: "Improving",
      statusColor: "bg-sk-successLight text-sk-successText",
      detail: "↓ Down 60% since onboarding",
      icon: "✅",
    },
    {
      title: "Audit Readiness",
      status: "Attention Needed",
      statusColor: "bg-amber-100 text-amber-700",
      detail: "2 centres overdue for review",
      icon: "📋",
    },
    {
      title: "Critical Issues",
      status: "Improving",
      statusColor: "bg-sk-successLight text-sk-successText",
      detail: "✓ 0 critical items this week",
      icon: "🛡️",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-sk-primary uppercase tracking-widest mb-2 block">
            Risk Trend Monitoring
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Monitor Risk Trends
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Track how your compliance posture evolves over time and catch problems early.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden>{tile.icon}</span>
                <h3 className="font-bold text-slate-900 text-base">{tile.title}</h3>
              </div>
              <div>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${tile.statusColor}`}>
                  {tile.status}
                </span>
              </div>
              <p className="text-sm text-slate-600">{tile.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
