/**
 * SME-Focused Section - 3 strongest real-world scenarios
 */

export default function ECECSpecific() {
  const smePoints = [
    {
      scenario: "Multi-Location Kit Management",
      summary: "Track every location's kit across your business — offices, sites, vehicles — with one tap per check.",
      story: "Staff scan the warehouse kit in 2 minutes. The dashboard flags which items need replacing before the next check is due."
    },
    {
      scenario: "WHS Audit Readiness",
      summary: "Export timestamped check logs for any date range in a few clicks when auditors arrive.",
      story: "Six months of check records, expiry alerts, and maintenance logs available to share on the same day as an inspection."
    },
    {
      scenario: "Multi-Site Business Oversight",
      summary: "One dashboard shows readiness status across 2, 5, or 15 locations — no spreadsheets.",
      story: "Business owners see at a glance which sites need attention first, with the ability to drill down quickly."
    }
  ];

  return (
    <section className="py-20 bg-teal-50 border-y border-teal-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            First Aid Kit Compliance for SMEs
          </h2>
          <p className="text-lg text-slate-600">How SMEs use SafetySight day to day</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {smePoints.map((point, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900 mb-2 text-base">{point.scenario}</h3>
              <p className="text-sm text-slate-600 mb-3 leading-snug">{point.summary}</p>
              <p className="text-xs text-slate-500 leading-snug italic">{point.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

