import { CheckCircle } from 'lucide-react';

export default function ProactiveEngine() {
  const actions = [
    {
      number: 1,
      title: "Run 10-minute mini-audit",
      description: "Complete a quick walk-through to identify gaps and update your readiness score.",
    },
    {
      number: 2,
      title: "Complete first inspection",
      description: "Log each kit with QR scanning to establish your compliance baseline.",
    },
    {
      number: 3,
      title: "Invite additional first aider",
      description: "Ensure certification coverage across all rooms and shifts.",
    },
  ];

  return (
    <section className="py-20 bg-sk-surfaceMuted">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-sk-primary uppercase tracking-widest mb-2 block">
            Proactive Engine
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Your Next 3 Actions — Always Clear
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            SafetyKit surfaces the most important steps so your team always knows what to do next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: app-style "Next 3 Actions" preview */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="bg-slate-800 px-4 py-3 flex items-center justify-between">
              <span className="text-white font-semibold text-sm">Next 3 Actions</span>
              <span className="text-xs bg-sk-primaryLight text-sk-primary font-semibold px-2 py-0.5 rounded-full">Proactive Engine</span>
            </div>
            <div className="p-4 bg-slate-50 space-y-3">
              {actions.map((action) => (
                <div key={action.number} className="bg-white rounded-xl border border-slate-200 p-4 flex items-start gap-3 shadow-sm">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sk-primary text-white flex items-center justify-center font-bold text-sm" aria-label={`Step ${action.number}`}>
                    <span aria-hidden="true">{action.number}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-0.5">{action.title}</p>
                    <p className="text-xs text-slate-500">{action.description}</p>
                  </div>
                  <div className="ml-auto flex-shrink-0 self-center">
                    <span className="text-slate-300 text-sm">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: textual explanation */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Stop guessing what to fix next</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                SafetyKit's Proactive Engine analyses your kit data and ranks the actions that will have the biggest compliance impact. No more prioritising from a spreadsheet — the platform does it for you.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                { label: "Ranked by compliance impact", detail: "Actions are scored and ordered by how much they improve your readiness score." },
                { label: "Always up to date", detail: "The list refreshes automatically as conditions change across your centres." },
                { label: "Assign in one tap", detail: "Delegate any action to a team member directly from the dashboard." },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-sk-success flex-shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-sm font-semibold text-sk-primary hover:text-sk-primaryHover"
            >
              See it in action <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
