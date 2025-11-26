export default function CaseStudyTemplate({logo, title, metrics = [], quote, children}){
  return (
    <section className="py-8 bg-white rounded-lg shadow-sm my-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-4">
          {logo && <img src={logo} alt="case study logo" className="h-8" />}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {metrics.map((m, i) => (
            <div key={i} className="p-4 bg-slate-50 rounded">
              <div className="text-2xl font-bold text-blue-600">{m.value}</div>
              <div className="text-sm text-slate-600">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="prose max-w-none text-slate-700">{children}</div>

        {quote && (
          <blockquote className="mt-4 p-4 border-l-4 border-blue-200 bg-blue-50 rounded">{quote}</blockquote>
        )}
      </div>
    </section>
  )
}
