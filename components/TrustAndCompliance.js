/**
 * Trust, Security & Compliance Section
 * Left: brief paragraph + key bullets. Right: card stack for Security, Regulatory, Pilot.
 */

export default function TrustAndCompliance() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: overview + bullets */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Built for compliance. Built for trust.</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Designed specifically for ECEC and healthcare sectors where safety is non-negotiable. SafetyKit provides structured evidence and guidance — not a replacement for your WHS obligations.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span><span><strong>Security</strong> — End-to-end encryption, role-based access, and AU/NZ hosted servers</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span><span><strong>Regulatory alignment</strong> — NQF-aligned, AS/NZS 4003 first-aid kit standards, GDPR &amp; Privacy Act compliant</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span><span><strong>Data location</strong> — All data stored on AU/NZ compliant servers</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span><span><strong>Audit trail</strong> — Every action timestamped and logged for full traceability</span></li>
            </ul>
            <p className="text-xs text-slate-400 mt-6 leading-relaxed">
              SafetyKit provides guidance and evidence for internal WHS readiness. It is not a legal compliance certification or a substitute for your WHS obligations.
            </p>
          </div>

          {/* Right: card stack */}
          <div className="space-y-4">
            <div className="p-5 bg-white rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Security by Design</h3>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li>• End-to-end encryption</li>
                <li>• AU/NZ compliant servers</li>
                <li>• Role-based access controls</li>
                <li>• SOC 2 Type II ready</li>
              </ul>
            </div>

            <div className="p-5 bg-white rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Regulatory Alignment</h3>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li>• Queensland ECEC standards &amp; NQF-aligned</li>
                <li>• First-aid kit standards (AS/NZS 4003)</li>
                <li>• Healthcare accreditation evidence support</li>
                <li>• GDPR &amp; Privacy Act compliant</li>
              </ul>
            </div>

            <div className="p-5 bg-blue-600 rounded-lg border border-blue-700 shadow-md text-white">
              <h3 className="text-sm font-bold mb-3">Risk-Free Pilot</h3>
              <ul className="space-y-1.5 text-sm text-blue-100">
                <li>• 30-day pilot for 1–2 centres</li>
                <li>• Full setup support included</li>
                <li>• Zero obligation to continue</li>
                <li>• Free migration if you proceed</li>
              </ul>
              <a href="#contact" className="mt-5 inline-block bg-white text-blue-600 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-50">
                Start your free pilot
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
