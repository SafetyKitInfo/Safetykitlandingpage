export default function CTABand({title='Ready to eliminate expired kits and pass audits with confidence?', children}){
  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 bg-blue-600 text-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-bold text-lg">{title}</div>
          <div className="text-sm opacity-90">Eliminate expired items · Reduce admin · Standardise checks · Pass audits confidently</div>
        </div>
        <div className="w-full md:w-auto mt-2 md:mt-0 flex flex-col md:flex-row gap-3">
          <a href="#contact" className="w-full md:w-auto text-center bg-white text-blue-600 px-5 py-2 rounded font-semibold">Get Started Free</a>
          <a href="#contact" className="w-full md:w-auto text-center border border-white text-white px-4 py-2 rounded">Book a Demo</a>
        </div>
      </div>
    </div>
  )
}
