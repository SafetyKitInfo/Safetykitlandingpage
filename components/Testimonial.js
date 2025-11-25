export default function Testimonial({ quote, by, logoSrc, metric }) {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 md:flex md:items-center md:gap-6">
        {logoSrc && (
          <div className="md:w-1/4 flex items-center justify-center mb-4 md:mb-0">
            <img src={logoSrc} alt={`${by} logo`} className="h-12" />
          </div>
        )}
        <div className="md:flex-1 text-center md:text-left">
          <blockquote className="italic text-xl text-gray-700">{quote || '“SafetyKit made compliance easy for our team!”'}</blockquote>
          <div className="mt-2 text-gray-500">— {by}</div>
          {metric && <div className="mt-3 text-sm text-slate-600">{metric}</div>}
        </div>
      </div>
    </section>
  )
}
