import content from '../content/safetykit-copy.json';

export default function MetricsRow() {
  const metrics = (content && content.hero && content.hero.metrics) || [];

  const trends = [
    { tag: "↑ Positive", color: "text-sk-success bg-sk-successLight" },
    { tag: "↑ Improving", color: "text-sk-success bg-sk-successLight" },
    { tag: "↑ Positive", color: "text-sk-success bg-sk-successLight" },
    { tag: "✓ Verified", color: "text-sk-success bg-sk-successLight" },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <div key={i} className="relative bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="h-1 w-full bg-sk-primary" />
              <div className="p-5 text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{m.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide leading-snug mb-3">{m.label}</div>
                {trends[i] && (
                  <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${trends[i].color}`}>
                    {trends[i].tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 text-center mt-5">
          Indicators based on data entered into SafetySight — not a legal compliance certification.
        </p>
      </div>
    </section>
  );
}
