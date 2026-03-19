const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Compliance that runs itself",
    description:
      "SafetyKit monitors inspections, expiries, and risk rules in the background — nothing is missed without manual follow-up.",
  },
  {
    id: "process-2",
    title: "Remove expiry risk early",
    description:
      "Predictive alerts surface items approaching expiry so teams act before unsafe equipment is ever used.",
  },
  {
    id: "process-3",
    title: "Lower inventory cost",
    description:
      "Automated alerts reduce over-ordering and prevent stockpiling across sites.",
  },
  {
    id: "process-4",
    title: "Always audit-ready",
    description:
      "Every inspection is automatically logged, time-stamped, and exportable — cutting audit prep from hours to minutes.",
  },
  {
    id: "process-5",
    title: "Visibility across every centre",
    description:
      "A single real-time view shows compliance status by centre, room, or asset.",
  },
  {
    id: "process-6",
    title: "Consistent execution at scale",
    description:
      "Guided workflows and clear SOPs ensure procedures are followed the same way at every location.",
  },
]

const Process = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Platform</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            One platform for kit compliance
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Mobile-first. Offline-ready. Built for ECEC and healthcare environments.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROCESS_PHASES.map((phase) => (
            <div
              key={phase.id}
              className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-slate-900 mb-2 text-base leading-snug">{phase.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Process }
