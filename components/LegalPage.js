import Head from 'next/head'

export default function LegalPage({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title} | SafetySight</title>
        <meta name="description" content={description} />
      </Head>
      <div className="min-h-screen bg-[#F4F6F8] text-[#1F2937]">
        <header className="border-b border-[#dce7e6] bg-white">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 sm:px-8">
            <a href="/" aria-label="SafetySight home"><img src="/images/safetysight-rectangle.png" alt="SafetySight" className="h-10 w-auto" /></a>
            <a href="/" className="text-sm font-bold text-[#0F766E] hover:brightness-90">Back to SafetySight</a>
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
          <article className="legal-copy rounded-[1.5rem] border border-[#dce7e6] bg-white p-7 shadow-[0_20px_60px_rgba(16,42,67,0.08)] sm:p-12">
            {children}
          </article>
        </main>
      </div>
    </>
  )
}
