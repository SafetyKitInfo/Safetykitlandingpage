import Head from 'next/head'
import PricingSection from '../components/PricingSection'

const SIGN_UP_URL = 'https://app.safetysight.net/sign-up'
const SIGN_IN_URL = 'https://app.safetysight.net/sign-in'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F4F6F8] text-[#1F2937]">
      <Head>
        <title>Pricing | SafetySight</title>
        <meta name="description" content="SafetySight plans for managing first-aid kit checks across Australian workplaces." />
      </Head>
      <nav className="px-3 pt-3 sm:px-5">
        <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between rounded-full border border-white/70 bg-white px-4 shadow-[0_10px_35px_rgba(16,42,67,0.10)] sm:px-6">
          <a href="/" aria-label="SafetySight home"><img src="/images/safetysight-rectangle.png" alt="SafetySight" className="h-12 w-auto object-contain" /></a>
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="/" className="hidden px-2 py-2 text-sm font-semibold text-[#626D7B] hover:text-[#0F766E] sm:block">Home</a>
            <a href={SIGN_IN_URL} className="px-2 py-2 text-sm font-semibold text-[#626D7B] hover:text-[#0F766E]">Sign in</a>
            <a href={SIGN_UP_URL} className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#0F766E] px-5 py-2 text-sm font-bold text-white hover:brightness-90">Sign up</a>
          </div>
        </div>
      </nav>
      <main className="pt-10 sm:pt-14"><PricingSection /></main>
      <footer className="bg-[#1F2937] py-10 text-[#D9E1E7]">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div><a href="/" aria-label="SafetySight home" className="inline-flex w-fit"><img src="/images/safetysight-logo.png" alt="SafetySight" className="w-44 object-contain" /></a><p className="mt-1 text-xs font-semibold tracking-wide text-[#AEB8C5]">Turning Chaos into Clarity</p></div>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm"><a href="/#product" className="hover:text-white">Product</a><a href="/#workflow" className="hover:text-white">How it works</a><a href="/pricing" className="text-white">Pricing</a><a href="/#scope" className="hover:text-white">Product scope</a><a href="/#about" className="hover:text-white">About</a><a href="/privacy" className="hover:text-white">Privacy</a><a href="/terms" className="hover:text-white">Terms</a></div>
          <p className="text-xs">© {new Date().getFullYear()} SafetySight</p>
        </div>
      </footer>
    </div>
  )
}
