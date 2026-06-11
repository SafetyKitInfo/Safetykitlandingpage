import { motion } from 'framer-motion';
import { QrCode, Bell, FileCheck } from 'lucide-react';

export default function HowItWorks() {
  const remotionEase = [0.16, 1, 0.3, 1];
  const steps = [
    {
      number: "1",
      title: "Scan & Check Kits Anywhere",
      description: "Mobile scanning and standardised checklists for every kit, every time.",
      benefits: ["QR/barcode scanning", "Standardised checklists", "Auditable check logs"],
      chip: null,
      Icon: QrCode,
    },
    {
      number: "2",
      title: "Track Expiry & Issues Automatically",
      description: "Real-time alerts stop expired items before they reach staff or families.",
      benefits: ["Expiry alerts (30/60/90 days out)", "Low-stock warnings", "Maintenance task assignment"],
      chip: "Proactive Engine",
      Icon: Bell,
    },
    {
      number: "3",
      title: "Provide Audit-Ready Evidence in Seconds",
      description: "Export timestamped check logs and evidence records on demand. A full historical record to support regulators and auditors.",
      benefits: ["Timestamp-verified check logs", "Audit evidence reports", "Complete inspection history"],
      chip: null,
      Icon: FileCheck,
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: remotionEase }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs font-semibold text-sk-primary uppercase tracking-widest mb-2 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">How Our First Aid Kit Compliance Platform Works</h2>
          <p className="text-base md:text-lg text-slate-600">Three simple steps from scanning to compliance proof</p>
        </motion.div>

        {/* Step flow with connectors */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8"
        >
          {/* Connector line (desktop only) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: remotionEase }}
            className="hidden md:block absolute top-8 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px origin-left bg-slate-200 z-0"
            aria-hidden
          />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: remotionEase } },
              }}
              className="flex flex-col relative z-10"
            >
              <div className="mb-4 md:mb-5 flex items-center gap-2 md:gap-3">
                <motion.div
                  whileHover={{ scale: 1.06, transition: { duration: 0.2, ease: remotionEase } }}
                  className="inline-flex items-center justify-center w-14 md:w-16 h-14 md:h-16 rounded-full bg-sk-primary text-white font-bold text-xl md:text-2xl shadow-md flex-shrink-0"
                >
                  {step.number}
                </motion.div>
                {step.chip && (
                  <span className="text-xs font-semibold text-sk-primary bg-sk-primaryLight px-2 py-0.5 rounded-full">
                    {step.chip}
                  </span>
                )}
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-5 shadow-sm flex-1">
                <div className="flex items-start gap-2 mb-3">
                  <step.Icon size={16} className="text-sk-primary flex-shrink-0 mt-0.5" aria-hidden />
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{step.title}</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                <ul className="space-y-2">
                  {step.benefits.slice(0, 3).map((benefit, bidx) => (
                    <li key={bidx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-sk-success font-bold mt-0.5">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
