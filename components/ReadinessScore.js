export default function ReadinessScore() {
  const score = 65;
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const categories = [
    {
      name: "Kit Readiness",
      pct: 90,
      color: "emerald",
      detail: "0 overdue · 6 uninspected",
    },
    {
      name: "Inventory Health",
      pct: 72,
      color: "amber",
      detail: "2 expiring · 1 low stock",
    },
    {
      name: "Certifications",
      pct: 60,
      color: "amber",
      detail: "1 expired · 1 expiring",
    },
    {
      name: "Audit Frequency",
      pct: 45,
      color: "red",
      detail: "Last audit 47 days ago",
    },
    {
      name: "Documentation",
      pct: 80,
      color: "amber",
      detail: "1 document missing",
    },
  ];

  const colorMap = {
    emerald: {
      bar: "bg-sk-success",
      badge: "bg-sk-successLight text-sk-successText",
      track: "bg-sk-successLight",
    },
    amber: {
      bar: "bg-amber-400",
      badge: "bg-amber-100 text-amber-700",
      track: "bg-amber-100",
    },
    red: {
      bar: "bg-sk-danger",
      badge: "bg-red-100 text-red-700",
      track: "bg-red-100",
    },
  };

  const legend = [
    { label: "Excellent", range: "95+", dot: "bg-sk-success" },
    { label: "Good", range: "80+", dot: "bg-sk-success" },
    { label: "Satisfactory", range: "75+", dot: "bg-amber-400" },
    { label: "Poor", range: "55+", dot: "bg-orange-400" },
    { label: "Critical", range: "<55", dot: "bg-sk-danger" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-sk-primary uppercase tracking-widest mb-2 block">
            WHS Compliance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Know Your Readiness Score
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            A single score that tells you exactly where you stand across every compliance dimension.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: circular progress */}
          <div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl border border-slate-200 p-10">
            <svg width="140" height="140" viewBox="0 0 140 140" aria-label="Readiness score 65 out of 100">
              <circle
                cx="70"
                cy="70"
                r={radius}
                fill="none"
                stroke="#fee2e2"
                strokeWidth="14"
              />
              <circle
                cx="70"
                cy="70"
                r={radius}
                fill="none"
                stroke="#ef4444"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                transform="rotate(-90 70 70)"
              />
              <text x="70" y="65" textAnchor="middle" fontSize="26" fontWeight="700" fill="#0f172a">
                {score}
              </text>
              <text x="70" y="82" textAnchor="middle" fontSize="11" fill="#64748b">
                /100
              </text>
            </svg>
            <div className="mt-4 text-center">
              <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded-full mb-1">
                Poor
              </span>
              <p className="text-xs text-slate-500">Significant gaps present</p>
            </div>
          </div>

          {/* Right: category cards */}
          <div className="space-y-3">
            {categories.map((cat, i) => {
              const c = colorMap[cat.color];
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex items-center gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-slate-800">{cat.name}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badge}`}>
                        {cat.pct}%
                      </span>
                    </div>
                    <div className={`h-2 rounded-full ${c.track} overflow-hidden`}>
                      <div
                        className={`h-2 rounded-full ${c.bar}`}
                        style={{ width: `${cat.pct}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{cat.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {legend.map((l, i) => (
            <span key={i} className="flex items-center gap-1.5 text-xs text-slate-500">
              <span className={`inline-block w-2.5 h-2.5 rounded-full ${l.dot}`} />
              {l.label} ({l.range})
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
