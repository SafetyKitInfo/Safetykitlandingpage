export default function HeroCopy(){
  return (
    <header className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-emerald-100 to-blue-50 text-emerald-700 px-3 py-1 text-sm rounded-full">Audit-ready. Clinically focused.</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Zero Expired First-Aid Kits. Zero Audit Stress.
            <span className="block text-blue-600">Keep every centre compliant with automated expiry tracking, kit monitoring, and audit-ready reporting.</span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700">Get Started Free</a>
            <a href="#contact" className="inline-block ml-2 px-5 py-3 rounded-lg text-sm border border-slate-200">Book a demo</a>
          </div>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-md text-sm text-slate-600">
            <li className="flex items-start gap-3"><strong className="text-blue-600">90% faster</strong> first-aid kit checks</li>
            <li className="flex items-start gap-3"><strong className="text-blue-600">100%</strong> expiry capture rate across centres</li>
            <li className="flex items-start gap-3"><strong className="text-blue-600">$X</strong> saved annually in wasted stock + admin hours</li>
          </ul>
        </div>

        <div className="order-first md:order-last" aria-hidden>
          <div className="rounded-xl overflow-hidden bg-white shadow-lg p-6">
            <div className="w-full h-64 bg-slate-100 flex items-center justify-center text-slate-400">Hero visual: educator scanning a kit</div>
          </div>
        </div>
      </div>
    </header>
  )
}
