import content from '../content/safetykit-copy.json';

export default function MetricsRow(){
  const metrics = (content && content.hero && content.hero.metrics) || [];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {metrics.map((m, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold text-slate-900">{m.value}</div>
              <div className="text-xs text-slate-500 mt-1 leading-snug uppercase tracking-wide">{m.label}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 text-center mt-6">
          Indicators based on data entered into SafetyKit — not a legal compliance certification.
        </p>
      </div>
    </section>
  )
}
