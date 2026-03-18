/**
 * ECEC-Specific Section - Deep-dive for early childhood centres
 * Highlights language and scenarios specific to childcare
 * Trimmed to 4 strongest scenarios as compact cards.
 */

export default function ECECSpecific() {
  const ececPoints = [
    {
      scenario: "Room-by-Room Kit Management",
      summary: "Track every room's kit — infants, toddlers, preschool, outdoor — with one tap per check.",
      story: "→ Sarah scans the infant room kit in 2 minutes. Dashboard flags which items need replacing."
    },
    {
      scenario: "Excursions & Off-Site Visits",
      summary: "Portable kits leave the centre regularly. Mark them 'in transit' and track their return automatically.",
      story: "→ Staff verify the park-visit kit is complete before and after — logged automatically."
    },
    {
      scenario: "Regulatory Audits & NQF Compliance",
      summary: "Export timestamped check logs for any date range in 2 clicks when auditors arrive.",
      story: "→ 6 months of check records, expiry alerts, and maintenance logs ready to share — same day."
    },
    {
      scenario: "Multi-Centre Network Oversight",
      summary: "One dashboard shows compliance status across 2, 5, or 15 centres — no spreadsheets.",
      story: "→ Directors see at a glance which centres are compliant and which need action. Drill down in seconds."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Built for Early Childhood. Built for You.
          </h2>
          <p className="text-lg text-slate-600">Real-world ECEC scenarios — SafetyKit handles them all</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {ececPoints.map((point, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900 mb-2 text-base">{point.scenario}</h3>
              <p className="text-sm text-slate-600 mb-3 leading-snug">{point.summary}</p>
              <p className="text-xs text-emerald-700 font-medium">{point.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

