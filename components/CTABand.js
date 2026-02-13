export default function CTABand({title='Ready to eliminate expired kits and standardise compliance across your centres?', children}){
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="text-sm opacity-95">Pilot in one centre. Full support. No obligation. See results in 30 days.</div>
        </div>
        <div className="w-full md:w-auto flex flex-col md:flex-row gap-3 flex-shrink-0">
          <a href="#contact" className="w-full md:w-auto text-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">Start 30-day Pilot</a>
          <a href="#contact" className="w-full md:w-auto text-center border-2 border-white text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700">Book a Demo</a>
        </div>
      </div>
    </div>
  )
}
