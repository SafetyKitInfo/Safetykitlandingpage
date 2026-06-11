export default function InventoryHealth() {
  const inventoryHealthPct = 72;
  const inventoryItems = [
    { label: "Healthy", count: 24, color: "text-sk-successText", dot: "bg-sk-success" },
    { label: "Expiring Soon", count: 4, color: "text-amber-700", dot: "bg-amber-400" },
    { label: "Low Stock", count: 2, color: "text-amber-700", dot: "bg-amber-400" },
    { label: "Expired", count: 1, color: "text-red-700", dot: "bg-sk-danger" },
  ];

  const priorityActions = [
    { label: "Replace expired item", detail: "Vehicle kit", color: "text-red-700", dot: "bg-sk-danger" },
    { label: "Review expiring stock", detail: "4 items", color: "text-amber-700", dot: "bg-amber-400" },
    { label: "Restock low supplies", detail: "2 items", color: "text-sk-primary", dot: "bg-sk-primary" },
  ];

  return (
    <section className="py-20 bg-sk-surfaceMuted">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-sk-primary uppercase tracking-widest mb-2 block">
            Inventory Control
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Protect Your People and Inventory
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Real-time visibility into stock health and the actions that need attention next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card A: Inventory Health Overview */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-base">Inventory Health Overview</h3>
              <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                {inventoryHealthPct}% Healthy
              </span>
            </div>
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden mb-5">
              <div className="h-2 rounded-full bg-sk-success" style={{ width: `${inventoryHealthPct}%` }} />
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

          {/* Card B: Priority Stock Actions */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-base">Priority Stock Actions</h3>
              <span className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                3 Open
              </span>
            </div>
            <div className="space-y-4 mt-2">
              {priorityActions.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                  <span className="flex items-center gap-2 text-sm text-slate-700">
                    <span className={`inline-block w-2.5 h-2.5 rounded-full ${item.dot}`} />
                    {item.label}
                  </span>
                  <span className={`text-sm font-bold ${item.color}`}>{item.detail}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-4">
              Actions are prioritised using expiry dates and stock levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
