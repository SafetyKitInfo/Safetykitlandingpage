/**
 * Common Compliance Issues vs SafetyKit Solutions
 * Shows specific pain points and how SafetyKit fixes them
 */

export default function IssuesVsSolutions() {
  const comparisons = [
    {
      issue: "Missing or expired first-aid items (39%)",
      solution: "Automated expiry alerts & visual kit status by room",
      impact: "Zero surprise failures during audits"
    },
    {
      issue: "Delays due to unclear kit locations (27%)",
      solution: "Digital kit directory by centre, room and floor with QR scanning",
      impact: "Staff finds kits in seconds, not minutes"
    },
    {
      issue: "Poor recordkeeping & audit chaos (34%)",
      solution: "Timestamped logs for every check, accessible in one dashboard",
      impact: "Auditors impressed, compliance verified in minutes"
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Kit Compliance Fails Today
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            And how SafetyKit fixes each one
          </p>
        </div>

        <div className="space-y-4">
          {comparisons.map((comp, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Left side: Problem */}
                <div className="p-6 border-r border-slate-200 bg-red-50/50">
                  <div className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-1">The Problem</div>
                  <p className="text-slate-900 font-medium">{comp.issue}</p>
                </div>
                
                {/* Right side: Solution */}
                <div className="p-6">
                  <div className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-1">SafetyKit Solution</div>
                  <p className="text-slate-900 font-medium mb-2">{comp.solution}</p>
                  <p className="text-sm text-emerald-700">→ {comp.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom context */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-center text-slate-700">
            <strong>Result:</strong> Centres using SafetyKit see <strong>80% reduction in expired-kit incidents</strong> within the first 90 days, 
            plus <strong>8–12 hours reclaimed per month</strong> from manual checking.
          </p>
        </div>
      </div>
    </section>
  );
}
