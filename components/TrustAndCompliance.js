import { Lock, BookOpen, Database, AlertTriangle } from 'lucide-react';

export default function TrustAndCompliance() {
  const columns = [
    {
      Icon: Lock,
      iconBg: "bg-sk-primaryLight",
      iconColor: "text-sk-primary",
      title: "Security by Design",
      bullets: [
        "End-to-end encryption",
        "AU/NZ compliant servers",
        "Role-based access controls",
        "SOC 2 Type II ready",
      ],
    },
    {
      Icon: BookOpen,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-700",
      title: "Regulatory Alignment",
      bullets: [
        "Queensland ECEC standards & NQF-aligned",
        "First-aid kit standards (AS/NZS 4003)",
        "Healthcare accreditation evidence support",
        "GDPR & Privacy Act compliant",
      ],
    },
    {
      Icon: Database,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700",
      title: "Data Location & Audit Trail",
      bullets: [
        "All data stored on AU/NZ compliant servers",
        "Every action timestamped and logged",
        "Full traceability for regulators",
        "Export audit evidence on demand",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-sk-primary uppercase tracking-widest mb-2 block">
            Trust &amp; Security
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Built for compliance. Built for trust.</h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Designed specifically for ECEC and healthcare sectors where safety is non-negotiable.
          </p>
        </div>

        {/* 3-column trust band */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {columns.map((col, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${col.iconBg} mb-4`}>
                <col.Icon size={18} className={col.iconColor} aria-hidden />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">{col.title}</h3>
              <ul className="space-y-2">
                {col.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-sk-success mt-0.5 font-bold flex-shrink-0">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer info bar */}
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <AlertTriangle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" aria-hidden />
          <p className="text-xs text-amber-800 leading-relaxed">
            <strong>SafetyKit is a guidance and record-keeping tool, not a legal authority.</strong> It supports your WHS readiness but does not certify legal compliance or replace professional WHS advice.
          </p>
        </div>

        {/* Risk-Free Pilot CTA */}
        <div className="mt-6 p-6 bg-sk-primary rounded-xl border border-sk-primaryHover shadow-md text-white flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex-1">
            <h3 className="text-sm font-bold mb-2">Risk-Free Pilot</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-teal-100">
              <span className="flex items-center gap-1.5"><span className="text-teal-300">•</span>30-day pilot for 1–2 centres</span>
              <span className="flex items-center gap-1.5"><span className="text-teal-300">•</span>Full setup support included</span>
              <span className="flex items-center gap-1.5"><span className="text-teal-300">•</span>Zero obligation to continue</span>
            </div>
          </div>
          <a href="#contact" className="flex-shrink-0 bg-white text-sk-primary font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-sk-surfaceMuted">
            Start your free pilot
          </a>
        </div>
      </div>
    </section>
  );
}
