export default function FeatureGrid(){
  const features = [
    {title:'Faster checks', desc:'Mobile scanning that completes kit checks in seconds — reduces staff time on manual audits.'},
    {title:'Prevent expiries', desc:'Predictive expiry alerts that remove expired items before they cause incidents.'},
    {title:'Reduce waste', desc:'Automated inventory alerts and reorder suggestions to cut wasted stock and cost.'},
    {title:'Pass audits', desc:'Audit-ready logs and exportable evidence to shorten audit prep and responses.'},
    {title:'Operational visibility', desc:'Real-time dashboard for centres and rooms to spot issues earlier.'},
    {title:'Less training time', desc:'AI-assisted SOP guidance and clear checklists to onboard staff faster.'}
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">We use SafetyKit for…</h2>
        <p className="text-slate-600 mb-6">Core modules that make kit compliance simple and repeatable.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 bg-white rounded-lg shadow-sm">
              <div className="font-semibold text-lg mb-2 text-blue-600">{f.title}</div>
              <div className="text-sm text-slate-600">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
