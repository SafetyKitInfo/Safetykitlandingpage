import { ArrowUp } from 'lucide-react';

export default function StickyCTA(){
  return (
    <div aria-hidden className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      <a href="#contact" className="inline-flex items-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <ArrowUp size={16} aria-hidden />
        <span className="font-semibold">Start Free Trial</span>
      </a>
    </div>
  )
}
