export default function Industries({ items = [] }) {
  const defaults = ['Education','Healthcare','Manufacturing','Construction','Hospitality','Logistics','Retail','Government']
  const list = items.length ? items : defaults
  return (
    <div className="py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {list.map((i, idx) => (
            <span key={idx} className="px-3 py-1 bg-white/70 backdrop-blur rounded-full text-sm text-slate-700 border border-slate-100">{i}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
