export default function TrustLogos({ logos = [] }) {
  // logos: array of { src, alt }
  return (
    <div className="py-8 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center text-sm text-gray-500 mb-4">Trusted by organisations across education and care</div>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {logos.length ? (
            logos.map((l, i) => (
              <img key={i} src={l.src} alt={l.alt || 'logo'} className="h-10 opacity-90" />
            ))
          ) : (
            // auto-load default logos from /public/logos if available
            <>
              <img src="/logos/logo1.svg" alt="Client 1" className="h-10 opacity-90" />
              <img src="/logos/logo2.svg" alt="Client 2" className="h-10 opacity-90" />
              <img src="/logos/logo3.svg" alt="Client 3" className="h-10 opacity-90" />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
