export default function TrustAndCompliance() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: overview + bullets */}
          <div>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-2 block">
              Trust &amp; Security
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Built for compliance. Built for trust.</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Designed specifically for ECEC and healthcare sectors where safety is non-negotiable. SafetyKit provides structured evidence and guidance — not a replacement for your WHS obligations.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span><span><strong>Security</strong> — End-to-end encryption, role-based access, and AU/NZ hosted servers</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span><span><strong>Regulatory alignment</strong> — NQF-aligned, AS/NZS 4003 first-aid kit standards, GDPR &amp; Privacy Act compliant</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span><span><strong>Data location</strong> — All data stored on AU/NZ compliant servers</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span><span><strong>Audit trail</strong> — Every action timestamped and logged for full traceability</span></li>
            </ul>

            {/* Disclaimer box */}
            <div className="mt-6 p-4 bg-amber-50 border border-amber-300 rounded-xl flex items-start gap-3">
              <span className="text-amber-500 text-lg flex-shrink-0" aria-hidden>⚠</span>
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong>SafetyKit is a guidance and record-keeping tool, not a legal authority.</strong> It supports your WHS readiness but does not certify legal compliance or replace professional WHS advice.
              </p>
            </div>
          </div>

          {/* Right: card stack */}
          <div className="space-y-4">
            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Security by Design</h3>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> End-to-end encryption</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> AU/NZ compliant servers</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> Role-based access controls</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> SOC 2 Type II ready</li>
              </ul>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Regulatory Alignment</h3>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> Queensland ECEC standards &amp; NQF-aligned</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> First-aid kit standards (AS/NZS 4003)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> Healthcare accreditation evidence support</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> GDPR &amp; Privacy Act compliant</li>
              </ul>
            </div>

            <div className="p-5 bg-emerald-700 rounded-xl border border-emerald-800 shadow-md text-white">
              <h3 className="text-sm font-bold mb-3">Risk-Free Pilot</h3>
              <ul className="space-y-1.5 text-sm text-emerald-100">
                <li className="flex items-center gap-2"><span className="text-emerald-300">•</span> 30-day pilot for 1–2 centres</li>
                <li className="flex items-center gap-2"><span className="text-emerald-300">•</span> Full setup support included</li>
                <li className="flex items-center gap-2"><span className="text-emerald-300">•</span> Zero obligation to continue</li>
                <li className="flex items-center gap-2"><span className="text-emerald-300">•</span> Free migration if you proceed</li>
              </ul>
              <a href="#contact" className="mt-5 inline-block bg-white text-emerald-700 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-emerald-50">
                Start your free pilot
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
