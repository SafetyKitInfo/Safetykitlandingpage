export default function FeatureGrid(){
  const features = [
    {title:'Kit Scanning', desc:'Scan, log and verify contents in seconds — works offline.'},
    {title:'Expiry Tracking', desc:'Predictive alerts months before items expire.'},
    {title:'Inventory Alerts', desc:'Low-stock triggers and suggested reorders.'},
    {title:'Audit Logs', desc:'Complete evidence trail for every check.'},
    {title:'Compliance Dashboard', desc:'Centre & room visibility at a glance.'},
    {title:'AI Safety Assistant', desc:'Quick SOP answers and reminders.'}
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
