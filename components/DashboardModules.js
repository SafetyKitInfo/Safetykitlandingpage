/**
 * Inside the SafetyKit Dashboard
 * Maps real app module names to their purpose so visitors know what to expect
 */

export default function DashboardModules() {
  const modules = [
    {
      name: "WHS Compliance Dashboard",
      description: "A real-time overview of readiness across every centre and room. Track kit status, first aider certifications, and outstanding maintenance items in one place.",
      tag: "Readiness"
    },
    {
      name: "Proactive Engine: Next 3 Actions",
      description: "Surfaces the highest-priority tasks based on data recorded in SafetyKit — expiry alerts, overdue checks, and certification gaps. Recommendations only, not legal advice.",
      tag: "Guidance"
    },
    {
      name: "ROI & Time Savings Dashboard",
      description: "Track your own time saved on checks, cost avoided through prevented expiries, and kit uptime. Outcomes are measured against data entered into SafetyKit.",
      tag: "Savings"
    },
    {
      name: "Risk Trend Monitoring",
      description: "Monitor incident trends, expiry breaches, audit readiness, and critical issues over time — an internal readiness indicator, not a legal compliance determination.",
      tag: "Risk"
    }
  ];

  const tagColors = {
    Readiness: "bg-blue-100 text-blue-700",
    Guidance: "bg-emerald-100 text-emerald-700",
    Savings: "bg-purple-100 text-purple-700",
    Risk: "bg-amber-100 text-amber-700"
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Inside the SafetyKit Dashboard</h2>
          <p className="text-lg text-slate-600">Real modules you will use from day one — no surprises when you log in</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((mod, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-slate-900 text-base leading-snug pr-4">{mod.name}</h3>
                <span className={`flex-shrink-0 text-xs font-semibold px-2 py-1 rounded-full ${tagColors[mod.tag]}`}>{mod.tag}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{mod.description}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-400 text-center mt-8">
          SafetyKit is a guidance and record-keeping tool. Readiness scores and dashboards are internal indicators based on data recorded in SafetyKit — not a legal compliance certification or substitute for your WHS obligations.
        </p>
      </div>
    </section>
  );
}
