import content from '../content/safetykit-copy.json';

export default function HeroCopy(){
  return (
    <header className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-emerald-100 to-blue-50 text-emerald-700 px-3 py-1 text-sm rounded-full">Audit-ready. Clinically focused.</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Eliminate expired kits and cut audit prep from hours to minutes
            <span className="block text-blue-600">Monitor every kit across all centres, prevent expiry incidents, and streamline compliance with SafetyKit.</span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700">Get Started Free</a>
            <a href="#contact" className="inline-block ml-2 px-5 py-3 rounded-lg text-sm border border-slate-200">Book a demo</a>
          </div>

          <div className="mt-6 flex items-center gap-3 max-w-md">
            <div className="flex-1 grid grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                <div className="text-lg font-extrabold text-blue-600">Faster checks</div>
                <div className="text-xs text-slate-600">reduce time spent on kit rounds</div>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                <div className="text-lg font-extrabold text-blue-600">Expiry capture</div>
                <div className="text-xs text-slate-600">automated expiry & stock alerts</div>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                <div className="text-lg font-extrabold text-blue-600">Reduced admin</div>
                <div className="text-xs text-slate-600">less time on audit prep and record keeping</div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-first md:order-last" aria-hidden>
          <div className="rounded-xl overflow-hidden bg-white shadow-lg p-6">
            <img
              src={(content && content.hero && content.hero.images && content.hero.images[0]) || '/hero.png'}
              alt="Hero visual: educator scanning a kit"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
