/**
 * Trust, Security & Compliance Section
 * Addresses safety concerns and compliance alignment
 */

export default function TrustAndCompliance() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Built for Compliance. Built for Trust.</h2>
          <p className="text-lg text-slate-600">Designed from the ground up for ECEC and healthcare sectors where safety is non-negotiable.</p>
          <p className="text-xs text-slate-400 mt-3">SafetyKit provides evidence and guidance for tracking kit checks, inventory, and training — not a legal compliance certification or substitute for your WHS obligations.</p>
        </div>

        {/* Security & Regulatory side-by-side, Risk-Free Pilot highlighted */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Security */}
          <div className="p-6 bg-white rounded-lg border border-blue-100 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-4">Security by Design</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• End-to-end encryption</li>
              <li>• AU/NZ compliant servers</li>
              <li>• Role-based access controls</li>
              <li>• Audit logs for every action</li>
              <li>• SOC 2 Type II ready</li>
            </ul>
          </div>

          {/* Compliance */}
          <div className="p-6 bg-white rounded-lg border border-emerald-100 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-4">Regulatory Alignment</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Queensland ECEC standards</li>
              <li>• NQF-aligned</li>
              <li>• First Aid Kit standards (AS/NZS 4003)</li>
              <li>• Designed to support healthcare accreditation evidence</li>
              <li>• GDPR &amp; Privacy Act compliant</li>
            </ul>
          </div>

          {/* Risk Reversal - highlighted */}
          <div className="p-6 bg-blue-600 rounded-lg border border-blue-700 shadow-md text-white flex flex-col">
            <h3 className="text-base font-bold mb-4">Risk-Free Pilot</h3>
            <ul className="space-y-2 text-sm text-blue-100 flex-1">
              <li>• 30-day pilot for 1–2 centres</li>
              <li>• Full support included</li>
              <li>• Zero obligation to continue</li>
              <li>• Dedicated success manager</li>
              <li>• Free migration if you proceed</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block bg-white text-blue-600 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-50 text-center">
              Start Your Free Pilot
            </a>
          </div>
        </div>

        {/* Trust indicators - moved just below the cards */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Trusted by Early Adopters</h3>
            <p className="text-sm text-slate-600">Centres and healthcare organisations across QLD and beyond</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg text-center shadow-sm">
              <div className="text-3xl font-extrabold text-blue-600 mb-1">50+</div>
              <div className="text-xs text-slate-600 leading-snug">Centres &amp; Orgs</div>
            </div>
            <div className="p-4 bg-white rounded-lg text-center shadow-sm">
              <div className="text-3xl font-extrabold text-emerald-600 mb-1">Up to 80%</div>
              <div className="text-xs text-slate-600 leading-snug">Fewer Expiry Incidents</div>
            </div>
            <div className="p-4 bg-white rounded-lg text-center shadow-sm">
              <div className="text-3xl font-extrabold text-purple-600 mb-1">8–12h</div>
              <div className="text-xs text-slate-600 leading-snug">Typically Saved Per Month</div>
            </div>
            <div className="p-4 bg-white rounded-lg text-center shadow-sm">
              <div className="text-3xl font-extrabold text-orange-600 mb-1">1 Day</div>
              <div className="text-xs text-slate-600 leading-snug">Setup &amp; Training</div>
            </div>
          </div>
          <p className="text-xs text-slate-400 text-center mt-4">Indicators based on data entered into SafetyKit — not a legal compliance certification.</p>
        </div>
      </div>
    </section>
  );
}

