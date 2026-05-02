import { AlertTriangle, CheckCircle } from 'lucide-react';

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
      solution: "Mobile scanning streamlines full kit checks and can help teams reclaim admin time each month."
    },
    {
      issue: "Inconsistent processes across centres",
      problem: "Each location follows slightly different procedures, making network-wide compliance impossible to verify.",
      solution: "Standardised checklists roll out instantly to every room, giving regional managers consistent data across all sites."
    },
    {
      issue: "Untracked stock waste",
      problem: "Over-ordering and disposal of unused items adds up to significant budget waste each year.",
      solution: "Automated inventory alerts and reorder suggestions help reduce over-ordering and stock waste."
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-sk-primary uppercase tracking-widest mb-2 block">
            Common Challenges
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Kit Compliance Fails Today</h2>
          <p className="text-lg text-slate-600">Common problems, and how SafetySight addresses each one</p>
        </div>

        <div className="space-y-4">
          {comparisons.map((comp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Problem card */}
              <div className="bg-white rounded-xl border-l-4 border-amber-400 border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={14} className="text-amber-500 flex-shrink-0" aria-hidden />
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full uppercase tracking-wide">
                    Common problem
                  </span>
                </div>
                <p className="text-slate-900 font-semibold text-sm mb-1">{comp.issue}</p>
                <p className="text-slate-500 text-xs leading-snug">{comp.problem}</p>
              </div>

              {/* Solution card */}
              <div className="bg-white rounded-xl border-l-4 border-sk-success border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle size={14} className="text-sk-success flex-shrink-0" aria-hidden />
                  <span className="text-xs font-semibold text-sk-primary bg-sk-primaryLight px-2 py-0.5 rounded-full uppercase tracking-wide">
                    How SafetySight helps
                  </span>
                </div>
                <p className="text-slate-700 text-sm leading-snug">{comp.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
