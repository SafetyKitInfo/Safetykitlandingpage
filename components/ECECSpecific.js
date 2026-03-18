/**
 * ECEC-Specific Section - Deep-dive for early childhood centres
 * Highlights language and scenarios specific to childcare
 */

export default function ECECSpecific() {
  const ececPoints = [
    {
      scenario: "Room-by-Room Kit Management",
      details: "Each room (infants, toddlers, preschool, outdoor room) has its own first-aid kit. SafetyKit tracks all of them separately with one tap per check.",
      example: "→ Sarah (room leader) scans the infant room kit in 2 minutes. Dashboard shows which items need replacing."
    },
    {
      scenario: "Excursions & Off-Site Visits",
      details: "Portable kits leave the centre regularly. SafetyKit marks them as 'in transit' with a portable list, then tracks them back.",
      example: "→ The preschool class takes a portable first-aid kit on their weekly park visit. Staff verify it's complete before and after, logged automatically."
    },
    {
      scenario: "Staff Ratios & New Starters",
      details: "Casual and relief staff rotate through rooms daily. SafetyKit means they follow the same standardised checklist—no confusion about what to check.",
      example: "→ A new casual educator arrives for their first shift. The app guides them through the same 3-minute kit check every other educator does."
    },
    {
      scenario: "Regulatory Audits & NQF Compliance",
      details: "When auditors ask 'Can you show me proof of regular kit checks?', you export a timestamped report for any date range in 2 clicks. Make it easy to show auditors your kit checks and evidence against NQF-aligned standards.",
      example: "→ Annual NQS audit happens next month. You have 6 months of complete check records, expiry alerts, and maintenance logs ready to share. Checks and kit status = verified."
    },
    {
      scenario: "Vaccine & Medical Records Integration",
      details: "Centres track not just first-aid kits but also allergy kits, immunisation records, and med admin logs in one place.",
      example: "→ The autism support kit is in the transition room. SafetyKit alerts when emergency medications near their expiry, flagging it for the medical coordinator."
    },
    {
      scenario: "Multi-Centre Network Oversight",
      details: "If you manage 2, 5, or 15 centres, see compliance status across all of them on one dashboard. No more emailing spreadsheets.",
      example: "→ Directors can see at a glance: 'Centre A is compliant, Centre B has 2 items due to expire, Centre C pending their check.' Drill down to room level in seconds."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Built for Early Childhood. Built for You.
          </h2>
          <p className="text-lg text-slate-600">Real-world ECEC scenarios—SafetyKit handles them all</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {ececPoints.map((point, idx) => (
            <div key={idx} className="border-l-4 border-emerald-500 pl-5 py-4 bg-emerald-50/40 rounded-r-lg">
              <h3 className="font-bold text-slate-900 mb-2">{point.scenario}</h3>
              <p className="text-sm text-slate-700 mb-2 leading-snug">{point.details}</p>
              <p className="text-xs text-emerald-700 italic">→ {point.example}</p>
            </div>
          ))}
        </div>

        {/* Outcomes summary - compact */}
        <div className="p-6 bg-emerald-50 rounded-lg border border-emerald-200 mb-8">
          <h3 className="font-bold text-slate-900 mb-4 text-center">What ECEC Centres See in 30 Days</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-700">Up to 80%</div>
              <p className="text-xs text-slate-700 mt-1 leading-snug">Fewer expired kit incidents</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-700">10h</div>
              <p className="text-xs text-slate-700 mt-1 leading-snug">Typically reclaimed per month</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-700">100%</div>
              <p className="text-xs text-slate-700 mt-1 leading-snug">Consistent processes</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-700">1</div>
              <p className="text-xs text-slate-700 mt-1 leading-snug">Click for audit evidence</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center mt-4">Outcomes are tracked via SafetyKit's internal ROI & Time Savings dashboard and are not a legal compliance certification.</p>
        </div>
      </div>
    </section>
  );
}
