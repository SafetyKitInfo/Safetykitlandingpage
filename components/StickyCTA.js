import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function StickyCTA(){
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating button */}
      <div aria-hidden className={`hidden md:block fixed bottom-8 right-8 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
        <a href="#contact" className="inline-flex items-center gap-3 bg-sk-primary text-white px-5 py-3 rounded-full shadow-lg shadow-sky-950/20 hover:bg-sk-primaryHover focus:outline-none focus:ring-2 focus:ring-sk-primary font-semibold">
          Start 30-day Pilot
          <ArrowRight size={16} aria-hidden />
        </a>
      </div>

      {/* Mobile full-width sticky bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <a href="#contact" className="flex-1 bg-sk-primary text-white px-4 py-3 rounded-md text-center font-semibold text-sm">Start Pilot</a>
          <a href="#contact" className="text-sm text-slate-600 px-3 py-2 font-medium">Demo</a>
        </div>
      </div>
    </>
  )
}
