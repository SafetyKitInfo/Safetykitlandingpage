import { AlertTriangle, CheckCircle, ClipboardList, Shield } from 'lucide-react';

export default function RiskTrend() {
  const tiles = [
    {
      title: "Incident Trends",
      status: "Increasing",
      statusColor: "bg-amber-100 text-amber-700",
      detail: "3 near-miss events this quarter",
      Icon: AlertTriangle,
      iconColor: "text-amber-500",
      trend: "↑",
      trendColor: "text-amber-600",
    },
    {
      title: "Expiry Breaches",
      status: "Improving",
      statusColor: "bg-sk-successLight text-sk-successText",
      detail: "Down 60% since onboarding",
      Icon: CheckCircle,
      iconColor: "text-sk-success",
      trend: "↓",
      trendColor: "text-sk-successText",
    },
    {
      title: "Audit Readiness",
      status: "Attention Needed",
      statusColor: "bg-amber-100 text-amber-700",
      detail: "2 centres overdue for review",
      Icon: ClipboardList,
      iconColor: "text-amber-500",
      trend: "→",
      trendColor: "text-amber-600",
    },
    {
      title: "Critical Issues",
      status: "Improving",
      statusColor: "bg-sk-successLight text-sk-successText",
      detail: "0 critical items this week",
      Icon: Shield,
      iconColor: "text-sk-success",
      trend: "↓",
      trendColor: "text-sk-successText",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
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
              className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                <tile.Icon size={18} className={tile.iconColor} aria-hidden />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-base">{tile.title}</h3>
                  <span className={`text-lg font-bold ${tile.trendColor}`}>{tile.trend}</span>
                </div>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${tile.statusColor} mb-2`}>
                  {tile.status}
                </span>
                <p className="text-sm text-slate-600">{tile.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
