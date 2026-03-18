/**
 * Common Compliance Issues vs SafetyKit Solutions
 * Shows specific pain points and how SafetyKit fixes them
 */

export default function IssuesVsSolutions() {
  const comparisons = [
    {
      issue: "Missing or expired first-aid items (39%)",
      solution: "Automated expiry alerts & visual kit status by room",
      impact: "Dramatically reduce surprise issues during audits"
    },
    {
      issue: "Delays due to unclear kit locations (27%)",
      solution: "Digital kit directory by centre, room and floor with QR scanning",
      impact: "Staff finds kits in seconds, not minutes"
    },
    {
      issue: "Poor recordkeeping & audit chaos (34%)",
      solution: "Timestamped logs for every check, accessible in one dashboard",
      impact: "Auditors can verify your kit checks and maintenance in minutes using timestamped logs"
    },
    {
      issue: "Manual checks = staff time wasted (avg. 3–5 hrs/week)",
      solution: "Mobile scanning completes full kit audits in 90 seconds per kit",
      impact: "Staff reclaim 8–12 hours per month per centre"
    },
    {
      issue: "Inconsistent processes across centres",
      solution: "Standardised checklists rolled out instantly to every room",
      impact: "Regional managers see consistent compliance across all sites"
    },
    {
      issue: "Lost stock = budget waste (untracked)",
      solution: "Automated inventory alerts & reorder suggestions",
      impact: "Save up to 15–20% on wasted stock per year"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Why Kit Compliance Fails Today</h2>
          <p className="text-lg text-slate-600">And how SafetyKit fixes each one</p>
        </div>

        <div className="space-y-3">
          {comparisons.map((comp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              {/* Left: Problem */}
              <div className="p-5 bg-red-50/60">
                <div className="text-xs font-bold text-red-700 uppercase tracking-wide mb-1">Problem</div>
                <p className="text-slate-900 font-medium text-sm leading-snug">{comp.issue}</p>
              </div>
              
              {/* Right: Solution */}
              <div className="p-5">
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-1">Solution</div>
                <p className="text-slate-900 font-medium text-sm leading-snug mb-2">{comp.solution}</p>
                <p className="text-xs text-emerald-700 font-medium">→ {comp.impact}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-slate-700 text-center leading-relaxed">
            <strong>Result:</strong> Centres typically see <strong>up to 80% fewer expired-kit incidents</strong> within 90 days, plus <strong>8–12 hours reclaimed per month</strong>, based on SafetyKit's internal ROI dashboard.
          </p>
          <p className="text-xs text-slate-500 text-center mt-2">Indicators are based on data entered into SafetyKit and are not a legal compliance certification.</p>
        </div>
      </div>
    </section>
  );
}
