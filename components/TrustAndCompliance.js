/**
 * Trust, Security & Compliance Section
 * Addresses safety concerns and compliance alignment
 */

export default function TrustAndCompliance() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for Compliance. Built for Trust.</h2>
          <p className="text-lg text-slate-600">Designed from the ground up for ECEC and healthcare sectors where safety is non-negotiable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Security */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Security by Design</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>✓ End-to-end encryption for all check data</li>
              <li>✓ Data stored in AU/NZ compliant servers</li>
              <li>✓ Role-based access controls (room, centre, regional)</li>
              <li>✓ Audit logs for every action</li>
              <li>✓ SOC 2 Type II ready</li>
            </ul>
          </div>

          {/* Compliance */}
          <div className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200">
            <div className="text-3xl mb-3">✓</div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Regulatory Alignment</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>✓ Queensland ECEC standards & NQF-aligned</li>
              <li>✓ First Aid Kit standards (AS/NZS 4003)</li>
              <li>✓ Healthcare accreditation ready</li>
              <li>✓ Aged care & disability compliance support</li>
              <li>✓ GDPR & Privacy Act compliant</li>
            </ul>
          </div>

          {/* Risk Reversal */}
          <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg border border-amber-200">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Risk-Free Pilot</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>✓ 30-day pilot in 1–2 centres</li>
              <li>✓ Full support & onboarding included</li>
              <li>✓ Zero obligation to continue</li>
              <li>✓ Dedicated success manager</li>
              <li>✓ Free migration if you decide to proceed</li>
            </ul>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Trusted by Early Adopters</h3>
            <p className="text-slate-600 mb-6">Early adopters in QLD childcare, healthcare, and multi-site operations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-slate-600">Centres & orgs</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-emerald-600">80%</div>
              <div className="text-sm text-slate-600">Fewer expiry incidents</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">10 hrs</div>
              <div className="text-sm text-slate-600">Saved per centre/month</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">1 day</div>
              <div className="text-sm text-slate-600">Setup & onboarding</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
