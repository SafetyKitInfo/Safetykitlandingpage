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

      <main className="relative min-h-screen overflow-hidden bg-[#072b47] text-white">
        <div className="mx-auto grid min-h-screen w-full max-w-[1600px] lg:grid-cols-[55%_45%]">
          <section className="relative z-10 flex min-h-screen flex-col px-6 py-7 sm:px-12 sm:py-10 lg:px-[6.25vw] lg:py-14">
            <div className="w-fit" aria-label="SafetySight">
              <img
                src="/images/safetysight-rectangle.png"
                alt="SafetySight"
                className="h-auto w-52 brightness-0 invert sm:w-64"
              />
            </div>

            <div className="my-auto max-w-[680px] py-16 lg:py-20">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#29dccb] sm:text-sm">
                Access unavailable
              </p>
              <h1 className="mt-7 text-[clamp(2.75rem,5.3vw,5.5rem)] font-bold leading-[0.99] tracking-[-0.055em] text-white">
                Access from this network is restricted.
              </h1>
              <p className="mt-8 max-w-[610px] text-base leading-8 text-[#d7e4ec] sm:text-xl sm:leading-9">
                SafetySight isn’t available from this network. If you believe this restriction is unexpected, contact your network administrator.
              </p>
              <a
                href="/"
                className="mt-14 inline-flex min-h-11 items-center border-b border-[#9db9c8] text-sm font-medium tracking-[0.08em] text-[#e8f1f5] transition hover:border-[#29dccb] hover:text-[#29dccb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#29dccb] focus-visible:ring-offset-4 focus-visible:ring-offset-[#072b47]"
              >
                Return to SafetySight
              </a>
            </div>

            <div className="pb-1">
              <div className="h-0.5 w-9 bg-[#29dccb]" />
              <p className="mt-4 text-[0.63rem] font-semibold uppercase tracking-[0.32em] text-[#9db9c8]">
                Safer people. Stronger workplaces.
              </p>
            </div>
          </section>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42vh] opacity-55 lg:relative lg:h-auto lg:min-h-screen lg:opacity-100">
            <img
              src="/images/network-access-field.png"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-[center_44%]"
            />
          </div>
        </div>
      </main>
    </>
  )
}
