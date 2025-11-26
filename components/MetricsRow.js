export default function MetricsRow(){
  const metrics = [
    {value:'90% faster', label:'kit checks'},
    {value:'100%', label:'expiry capture'},
    {value:'4–8 hrs', label:'saved / centre / month'}
  ];

  return (
    <section className="py-8 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {metrics.map((m,i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow">
              <div className="text-2xl font-extrabold text-blue-600">{m.value}</div>
              <div className="text-sm text-slate-600 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
