/**
 * Trust, Security & Compliance Section
 * Addresses safety concerns and compliance alignment
 */

export default function TrustAndCompliance() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Built for Compliance. Built for Trust.</h2>
          <p className="text-lg text-slate-600">Designed from the ground up for ECEC and healthcare sectors where safety is non-negotiable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Security */}
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Security by Design</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• End-to-end encryption</li>
              <li>• AU/NZ compliant servers</li>
              <li>• Role-based access controls</li>
              <li>• Audit logs for every action</li>
              <li>• SOC 2 Type II ready</li>
            </ul>
          </div>

          {/* Compliance */}
          <div className="p-6 bg-emerald-50 rounded-lg border border-emerald-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Regulatory Alignment</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Queensland ECEC standards</li>
              <li>• NQF-aligned</li>
              <li>• First Aid Kit standards (AS/NZS 4003)</li>
              <li>• Healthcare accreditation ready</li>
              <li>• GDPR & Privacy Act compliant</li>
            </ul>
          </div>

          {/* Risk Reversal */}
          <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Risk-Free Pilot</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• 30-day pilot for 1–2 centres</li>
              <li>• Full support included</li>
              <li>• Zero obligation to continue</li>
              <li>• Dedicated success manager</li>
              <li>• Free migration if you proceed</li>
            </ul>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Trusted by Early Adopters</h3>
            <p className="text-sm text-slate-600">Centres and healthcare organisations across QLD and beyond</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
              <div className="text-xs text-slate-600 leading-snug">Centres & Orgs</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">80%</div>
              <div className="text-xs text-slate-600 leading-snug">Fewer Expiry Incidents</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">10h</div>
              <div className="text-xs text-slate-600 leading-snug">Saved Per Month</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">1d</div>
              <div className="text-xs text-slate-600 leading-snug">Setup & Training</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
