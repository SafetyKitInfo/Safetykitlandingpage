export default function ProactiveEngine() {
  const actions = [
    {
      number: "#1",
      title: "Run 10-minute mini-audit",
      description: "Complete a quick walk-through to identify gaps and update your readiness score.",
      pill: "Proactive Engine",
    },
    {
      number: "#2",
      title: "Complete first inspection",
      description: "Log each kit with QR scanning to establish your compliance baseline.",
      pill: "Proactive Engine",
    },
    {
      number: "#3",
      title: "Invite additional first aider",
      description: "Ensure certification coverage across all rooms and shifts.",
      pill: "Proactive Engine",
    },
  ];

  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-2 block">
            Proactive Engine
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Your Next 3 Actions — Always Clear
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            SafetyKit surfaces the most important steps so your team always knows what to do next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actions.map((action, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-emerald-100 shadow-sm p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-extrabold text-emerald-600">{action.number}</span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  {action.pill}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">{action.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">{action.description}</p>
              <div className="mt-5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Get started <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
