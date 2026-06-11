import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function ProactiveEngine() {
  const remotionEase = [0.16, 1, 0.3, 1];
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
      title: "Replace two expiring items",
      description: "Resolve the highest-priority stock risks before the next inspection.",
    },
  ];

  return (
    <section className="py-20 bg-sk-surfaceMuted">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-sk-primary uppercase tracking-widest mb-2 block">
            Proactive Engine
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Your Next 3 Actions — Clearly Prioritised
          </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
            SafetySight surfaces the most important steps so your team can quickly decide what to do next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: app-style "Next 3 Actions" preview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: remotionEase }}
            className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="bg-slate-800 px-4 py-3 flex items-center justify-between">
              <span className="text-white font-semibold text-sm">Next 3 Actions</span>
              <span className="text-xs bg-sk-primaryLight text-sk-primary font-semibold px-2 py-0.5 rounded-full">Proactive Engine</span>
            </div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              className="p-4 bg-slate-50 space-y-3"
            >
              {actions.map((action) => (
                <motion.div
                  key={action.number}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: remotionEase } },
                  }}
                  whileHover={{ x: 4, transition: { duration: 0.2, ease: remotionEase } }}
                  className="bg-white rounded-xl border border-slate-200 p-4 flex items-start gap-3 shadow-sm"
                >
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
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: textual explanation */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Stop guessing what to fix next</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                SafetySight's Proactive Engine analyses your kit data and ranks the actions that will have the biggest compliance impact. No more prioritising from a spreadsheet — the platform does it for you.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                { label: "Ranked by compliance impact", detail: "Actions are scored and ordered by how much they improve your readiness score." },
                { label: "Kept up to date", detail: "The list refreshes automatically as conditions change across your centres." },
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
