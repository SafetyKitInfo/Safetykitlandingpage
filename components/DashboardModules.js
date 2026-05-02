import { LayoutDashboard, Zap, TrendingUp, BarChart2 } from 'lucide-react';

export default function DashboardModules() {
  const modules = [
    {
      name: "WHS Readiness Dashboard",
      description: "Live status of every kit, first aider certifications, and outstanding actions across all centres.",
      benefit: "See readiness across every centre in one view",
      tag: "Readiness",
      Icon: LayoutDashboard,
      iconBg: "bg-sk-primaryLight",
      iconColor: "text-sk-primary",
    },
    {
      name: "Proactive Engine",
      description: "Ranks upcoming expiry, overdue checks, and certification gaps so teams know exactly what to do next.",
      benefit: "Your next three steps, clearly prioritised",
      tag: "Guidance",
      Icon: Zap,
      iconBg: "bg-sk-primaryLight",
      iconColor: "text-sk-primary",
    },
    {
      name: "ROI & Time Savings",
      description: "Tracks time spent on checks and cost avoided from prevented expiries, measured against data you record.",
      benefit: "Measure the hours and dollars you're saving",
      tag: "Savings",
      Icon: TrendingUp,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700",
    },
    {
      name: "Risk Trend Monitoring",
      description: "Visualises expiry breaches, incidents, and audit readiness over time so issues are caught early.",
      benefit: "Catch problems before they become incidents",
      tag: "Risk",
      Icon: BarChart2,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-700",
    }
  ];

  const tagColors = {
    Readiness: "bg-sk-primaryLight text-sk-primary",
    Guidance: "bg-sk-primaryLight text-sk-primary",
    Savings: "bg-purple-100 text-purple-700",
    Risk: "bg-amber-100 text-amber-700"
  };

  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-sk-primary uppercase tracking-widest mb-2 block">
            Platform
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Inside the SafetySight Dashboard</h2>
          <p className="text-lg text-slate-600">Four core modules to support daily operations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {modules.map((mod, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${mod.iconBg} flex items-center justify-center`}>
                  <mod.Icon size={20} className={mod.iconColor} aria-hidden />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-slate-900 text-base leading-snug">{mod.name}</h3>
                    <span className={`flex-shrink-0 text-xs font-semibold px-2 py-1 rounded-full ${tagColors[mod.tag]}`}>
                      {mod.tag}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">{mod.description}</p>
              <p className="text-xs font-semibold text-sk-primary border-t border-slate-100 pt-3 flex items-center gap-1.5">
                <span className="text-sk-success">✓</span> {mod.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
