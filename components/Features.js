const features = [
  { title: 'Checklists', desc: 'Create and share safety checklists to ensure compliance and readiness.' },
  { title: 'Real-time Alerts', desc: 'Notify teams instantly with push & SMS-ready integrations.' },
  { title: 'Reports', desc: 'Generate audit-ready reports with one click.' },
]

export default function Features(){
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-gray-900">Features</h3>
        <p className="mt-2 text-gray-600">Designed for teams of any size to stay safe and compliant.</p>

        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
          {features.map((f)=> (
            <div key={f.title} className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900">{f.title}</h4>
              <p className="mt-3 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
