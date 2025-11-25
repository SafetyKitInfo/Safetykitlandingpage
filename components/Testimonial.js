export default function Testimonial({ quote, by }) {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center px-4">
        <blockquote className="italic text-xl text-gray-700">{quote || '“SafetyKit made compliance easy for our team!”'}</blockquote>
        {by && <div className="mt-2 text-gray-500">— {by}</div>}
      </div>
    </section>
  )
}
