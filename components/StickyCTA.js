export default function StickyCTA(){
  return (
    <div aria-hidden className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      <a href="#contact" className="inline-flex items-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 2v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M5 9l7-7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <span className="font-semibold">Start Free Trial</span>
      </a>
    </div>
  )
}
