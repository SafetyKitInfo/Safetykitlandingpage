export default function TrustLogos({ logos = [] }) {
  // logos: array of { src, alt }
  return (
    <div className="py-8 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center text-sm text-gray-500 mb-4">Trusted by organisations across education and care</div>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {logos.length ? (
            logos.map((l, i) => (
              <img key={i} src={l.src} alt={l.alt || 'logo'} className="h-10 opacity-80" />
            ))
          ) : (
            // placeholders
            <>
              <div className="h-10 w-28 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">Logo</div>
              <div className="h-10 w-28 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">Logo</div>
              <div className="h-10 w-28 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">Logo</div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
