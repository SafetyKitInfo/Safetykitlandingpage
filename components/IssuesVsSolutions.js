/**
 * Common Compliance Issues vs SafetyKit Solutions
 * Simple two-column layout: Common problem | How SafetyKit helps
 */

export default function IssuesVsSolutions() {
  const comparisons = [
    {
      issue: "Missing or expired first-aid items",
      problem: "Items expire between manual checks, creating gaps that are only discovered during audits.",
      solution: "Automated expiry alerts and visual kit status by room mean expired items are caught weeks in advance, not during a surprise inspection."
    },
    {
      issue: "Unclear kit locations",
      problem: "Staff spend minutes searching for kits during incidents, adding stress to an already critical moment.",
      solution: "A digital kit directory by centre, room, and floor with QR scanning lets staff locate any kit in seconds."
    },
    {
      issue: "Poor recordkeeping for audits",
      problem: "Scrambling to reconstruct check histories from memory or scattered spreadsheets before an audit.",
      solution: "Timestamped logs for every check are stored automatically and accessible in one dashboard — ready to export in under two minutes."
    },
    {
      issue: "Manual checks waste staff time",
      problem: "Full kit audits done manually average 3–5 hours per week across a centre.",
      solution: "Mobile scanning completes a full kit check in 90 seconds. Centres typically reclaim 8–12 hours per month."
    },
    {
      issue: "Inconsistent processes across centres",
      problem: "Each location follows slightly different procedures, making network-wide compliance impossible to verify.",
      solution: "Standardised checklists roll out instantly to every room, giving regional managers consistent data across all sites."
    },
    {
      issue: "Untracked stock waste",
      problem: "Over-ordering and disposal of unused items adds up to significant budget waste each year.",
      solution: "Automated inventory alerts and reorder suggestions reduce over-ordering and help centres save up to 15–20% on wasted stock."
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Why Kit Compliance Fails Today</h2>
          <p className="text-lg text-slate-600">Common problems, and how SafetyKit addresses each one</p>
        </div>

        <div className="space-y-3">
          {comparisons.map((comp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-sm transition-shadow">
              {/* Left: Problem */}
              <div className="p-5 border-b md:border-b-0 md:border-r border-slate-100">
                <div className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">Common problem</div>
                <p className="text-slate-900 font-medium text-sm mb-1">{comp.issue}</p>
                <p className="text-slate-500 text-xs leading-snug">{comp.problem}</p>
              </div>
              
              {/* Right: Solution */}
              <div className="p-5">
                <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">How SafetyKit helps</div>
                <p className="text-slate-700 text-sm leading-snug">{comp.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
