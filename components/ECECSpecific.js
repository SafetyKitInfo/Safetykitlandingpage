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
      details: "When auditors ask 'Can you show me proof of regular kit checks?', you export a timestamped report for any date range in 2 clicks. Compliance = verified.",
      example: "→ Annual NQS audit happens next month. You have 6 months of complete check records, expiry alerts, and maintenance logs ready to share."
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
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Built for Early Childhood. Built for You.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real-world ECEC scenarios—from room checks to regulatory audits to excursions—SafetyKit handles them all.
          </p>
        </div>

        <div className="space-y-6">
          {ececPoints.map((point, idx) => (
            <div key={idx} className="border-l-4 border-emerald-500 pl-6 py-4 bg-emerald-50/50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{point.scenario}</h3>
              <p className="text-slate-700 mb-3">{point.details}</p>
              <div className="text-sm text-emerald-700 font-medium italic">{point.example}</div>
            </div>
          ))}
        </div>

        {/* ECEC outcomes summary */}
        <div className="mt-12 p-8 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg border-2 border-emerald-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">What Early Childhood Centres See in the First 30 Days</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold text-emerald-700 mb-1">Zero</div>
              <p className="text-slate-700">Expired kit surprises during audits or routine checks</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-700 mb-1">10–12 hrs</div>
              <p className="text-slate-700">Reclaimed per centre per month from manual checking</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-700 mb-1">100%</div>
              <p className="text-slate-700">Staff following the same kit check process (no inconsistency)</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-700 mb-1">1 click</div>
              <p className="text-slate-700">To pull a compliance report for auditors or regulators</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-slate-600 mb-4">Ready to see how SafetyKit transforms kit compliance in your centre?</p>
          <a href="#contact" className="inline-block bg-emerald-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-emerald-700">
            Start Your 30-Day Pilot Today
          </a>
        </div>
      </div>
    </section>
  );
}
