import content from '../content/safetykit-copy.json';

const STAT_COLORS = [
  'text-blue-600',
  'text-emerald-600',
  'text-purple-600',
  'text-orange-600',
];

export default function MetricsRow(){
  const metrics = (content && content.hero && content.hero.metrics) || [];

  return (
    <section className="py-10 bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {metrics.map((m, i) => (
            <div key={i} className="p-5 bg-slate-50 rounded-lg">
              <div className={`text-2xl md:text-3xl font-extrabold ${STAT_COLORS[i % STAT_COLORS.length]}`}>{m.value}</div>
              <div className="text-xs text-slate-600 mt-1 leading-snug">{m.label}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 text-center mt-4">
          Indicators based on data entered into SafetyKit — not a legal compliance certification.
        </p>
      </div>
    </section>
  )
}
