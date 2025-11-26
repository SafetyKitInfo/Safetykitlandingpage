import content from '../content/safetykit-copy.json';

export default function MetricsRow(){
  const metrics = (content && content.hero && content.hero.metrics) || [
    {value:'340M+', label:'workplace accidents / year (global)'},
    {value:'$28B', label:'annual cost to Australian businesses'},
    {value:'1 in 20', label:'Australian workers injured / year'}
  ];

  return (
    <section className="py-8 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {metrics.map((m,i) => (
            <div key={i} className="p-6 bg-gradient-to-r from-white to-slate-50 rounded-lg shadow-md">
              <div className="text-2xl md:text-3xl font-extrabold text-blue-600">{m.value}</div>
              <div className="text-sm text-slate-600 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
