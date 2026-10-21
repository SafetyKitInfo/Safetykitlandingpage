import Head from 'next/head'

export default function BlockedPage() {
  return (
    <>
      <Head>
        <title>Access unavailable | SafetySight</title>
        <meta
          name="description"
          content="Access to SafetySight is unavailable from this network."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-16 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.24),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.16),transparent_34%)]"
        />

        <section className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-2xl shadow-black/30 backdrop-blur sm:p-12">
          <a href="/" aria-label="SafetySight home" className="inline-flex rounded-xl bg-white px-4 py-3">
            <img
              src="/images/safetysight-rectangle.png"
              alt="SafetySight"
              className="h-9 w-auto object-contain"
            />
          </a>

          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
            Access unavailable
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            This network can’t access SafetySight.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
            Access from this network has been restricted. If you believe this is an error, contact the SafetySight team and include the time you attempted to visit.
          </p>

          <a
            href="mailto:info.safetysight@gmail.com?subject=SafetySight%20access%20review"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Request an access review
          </a>

          <p className="mt-8 text-xs leading-5 text-slate-500">
            Reference: network access policy
          </p>
        </section>
      </main>
    </>
  )
}
