export default function CTABand({title='Ready to eliminate expired kits and pass audits with confidence?', children}){
  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 bg-blue-600 text-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
        <div>
          <div className="font-bold text-lg">{title}</div>
          <div className="text-sm opacity-90">Eliminate expired items · Reduce admin · Standardise checks · Pass audits confidently</div>
        </div>
        <div className="mt-4 md:mt-0">
          <a href="#contact" className="bg-white text-blue-600 px-5 py-2 rounded font-semibold mr-3">Get Started Free</a>
          <a href="#contact" className="border border-white text-white px-4 py-2 rounded">Book a Demo</a>
        </div>
      </div>
    </div>
  )
}
