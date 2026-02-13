import { ArrowUp } from 'lucide-react';

export default function StickyCTA(){
  return (
    <>
      {/* Desktop floating button */}
      <div aria-hidden className="hidden md:block fixed bottom-8 right-8 z-50">
        <a href="#contact" className="inline-flex items-center gap-3 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold">
          <ArrowUp size={16} aria-hidden />
          Start 30-day Pilot
        </a>
      </div>

      {/* Mobile full-width sticky bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <a href="#contact" className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-md text-center font-semibold text-sm">Start Pilot</a>
          <a href="#contact" className="text-sm text-slate-600 px-3 py-2 font-medium">Demo</a>
        </div>
      </div>
    </>
  )
}
