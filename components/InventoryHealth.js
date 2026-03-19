export default function InventoryHealth() {
  const inventoryItems = [
    { label: "Healthy", count: 24, color: "text-emerald-700", dot: "bg-emerald-500" },
    { label: "Expiring Soon", count: 4, color: "text-amber-700", dot: "bg-amber-400" },
    { label: "Low Stock", count: 2, color: "text-amber-700", dot: "bg-amber-400" },
    { label: "Expired", count: 1, color: "text-red-700", dot: "bg-red-500" },
  ];

  const certItems = [
    { label: "Active", count: 3, color: "text-emerald-700", dot: "bg-emerald-500" },
    { label: "Expiring Soon", count: 1, color: "text-amber-700", dot: "bg-amber-400" },
    { label: "Expired", count: 1, color: "text-red-700", dot: "bg-red-500" },
  ];

  return (
    <section className="py-20 bg-emerald-50/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-2 block">
            Inventory &amp; Certifications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Protect Your People and Inventory
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Real-time visibility into stock health and first aider certification status.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card A: Inventory Health Overview */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-base">Inventory Health Overview</h3>
              <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                72% Healthy
              </span>
            </div>
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden mb-5">
              <div className="h-2 rounded-full bg-emerald-500" style={{ width: "72%" }} />
            </div>
            <div className="space-y-3">
              {inventoryItems.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-slate-700">
                    <span className={`inline-block w-2.5 h-2.5 rounded-full ${item.dot}`} />
                    {item.label}
                  </span>
                  <span className={`text-sm font-bold ${item.color}`}>{item.count} items</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card B: First Aider Certifications */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-base">First Aider Certifications</h3>
              <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                3 Active
              </span>
            </div>
            <div className="space-y-4 mt-2">
              {certItems.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                  <span className="flex items-center gap-2 text-sm text-slate-700">
                    <span className={`inline-block w-2.5 h-2.5 rounded-full ${item.dot}`} />
                    {item.label}
                  </span>
                  <span className={`text-sm font-bold ${item.color}`}>{item.count}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-4">
              Certifications tracked per staff member with expiry alerts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
