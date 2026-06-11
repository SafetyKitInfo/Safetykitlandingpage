export default function AboutUs() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-[#dff6f7]"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#cfe4e7] bg-slate-100 shadow-[0_24px_60px_rgba(8,70,91,0.16)]">
              <img
                src="/images/safetysight-founders.jpg"
                alt="SafetySight founders Taj Kilchester, Matthew O'Shea, and Philip Kasselman"
                className="aspect-[4/5] w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-sk-primary">
              About SafetySight
            </span>
            <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
              Meet the Founders
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-slate-600 md:text-lg">
              <p>
                SafetySight is built by Taj Kilchester, Philip Kasselman, and Matthew O'Shea,
                three Australian founders focused on making workplace first-aid readiness
                simpler, clearer, and easier to manage.
              </p>
              <p>
                We started SafetySight after seeing how often businesses still rely on paper
                checks, spreadsheets, and memory to keep first-aid systems compliant. Our goal
                is to give teams a practical, modern tool that turns everyday safety admin into
                a clear, reliable workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
