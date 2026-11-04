import React, { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileClock,
  MapPin,
  Menu,
  PackageSearch,
  AlertTriangle,
  X,
} from 'lucide-react'

const SIGN_UP_URL = 'https://app.safetysight.net/sign-up'
const SIGN_IN_URL = 'https://app.safetysight.net/sign-in'

const workflow = [
  { number: '01', title: 'Record the check', copy: 'Open the right kit and work through a consistent check on site.', Icon: ClipboardCheck },
  { number: '02', title: 'Review what needs attention', copy: 'See items recorded as missing, low or nearing their entered expiry date.', Icon: AlertTriangle },
  { number: '03', title: 'Keep the history', copy: 'Retain a clear record of what was checked, when and by whom.', Icon: FileClock },
]

const plans = [
  {
    name: 'Free',
    price: 'A$0',
    priceDetail: '',
    bestFor: 'Get your first kits organised',
    description: 'Start with one site, build a more consistent check routine and see how SafetySight fits your team.',
    included: ['1 location', '3 first-aid kits', '5 trial SightScans'],
    cta: 'Create free account',
    href: SIGN_UP_URL,
  },
  {
    name: 'Standard',
    price: 'A$90',
    priceDetail: '/month',
    bestFor: 'Keep routine checks moving as you grow',
    description: 'A practical plan for small teams managing several workplaces and kits.',
    included: ['3 locations', '15 first-aid kits', '20 SightScans each month'],
    cta: 'Start Standard',
    href: SIGN_UP_URL,
    featured: true,
  },
  {
    name: 'Standard add-on',
    price: 'A$30',
    priceDetail: '/month per location',
    bestFor: 'Add capacity without changing plans',
    description: 'Extend Standard one location at a time as your organisation expands.',
    included: ['1 additional location', '5 additional first-aid kits', '5 additional SightScans each month', 'Up to 5 locations total'],
    cta: 'Add to Standard',
    href: SIGN_UP_URL,
  },
  {
    name: 'Pro',
    price: 'A$300',
    priceDetail: '/month',
    bestFor: 'Run a larger operation with predictable pricing',
    description: 'Ten locations at the same A$30 per-location monthly rate.',
    included: ['10 locations', '50 first-aid kits', '60 SightScans each month'],
    cta: 'Choose Pro',
    href: SIGN_UP_URL,
  },
  {
    name: 'Enterprise',
    price: 'Custom quote',
    priceDetail: '',
    bestFor: 'Coordinate a larger rollout',
    description: 'Shape a negotiated package around your organisation, rollout needs and required support.',
    included: ['Allowances agreed for your rollout', 'Services agreed for your organisation'],
    cta: 'Contact sales',
    href: 'mailto:info.safetysight@gmail.com?subject=SafetySight%20Enterprise',
  },
]

const productItems = [
  { name: 'Gauze swabs', date: '12 Mar 2027', state: 'Review soon', tone: 'warning' },
  { name: 'Antiseptic wipes', date: '14 Aug 2027', state: 'Recorded', tone: 'ok' },
  { name: 'Adhesive bandages', date: '03 Sep 2027', state: 'Recorded', tone: 'ok' },
  { name: 'Eye wash', date: '21 Jan 2028', state: 'Recorded', tone: 'ok' },
]

function Brand({ className = 'h-9 w-auto sm:h-10' }) {
  return (
    <a href="#top" className="inline-flex items-center" aria-label="SafetySight home">
      <img src="/images/safetysight-rectangle.png" alt="SafetySight" className={`${className} object-contain`} />
    </a>
  )
}

function PrimaryLink({ className = '', children = 'Sign up' }) {
  return (
    <a
      href={SIGN_UP_URL}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#0F766E] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(15,118,110,0.18)] transition hover:-translate-y-0.5 hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2 ${className}`}
    >
      {children}<ArrowRight size={17} aria-hidden="true" />
    </a>
  )
}

function ProductPreview() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="overflow-hidden rounded-[1.4rem] border border-white/80 bg-white shadow-[0_30px_80px_rgba(14,38,57,0.20)] ring-1 ring-[#D9E1E7]">
        <div className="grid min-h-[410px] grid-cols-1 md:grid-cols-[170px_minmax(0,1fr)_250px]">
          <aside className="hidden border-r border-[#D9E1E7] bg-[#F4F6F8] p-5 md:block">
            <img src="/images/safetysight-rectangle.png" alt="" className="mb-8 h-8 w-auto" />
            <nav aria-label="Illustrative product navigation" className="space-y-1.5 text-sm">
              {[
                [PackageSearch, 'Kits', true], [MapPin, 'Sites', false], [ClipboardCheck, 'Inspections', false],
                [AlertTriangle, 'Issues', false], [FileClock, 'Records', false],
              ].map(([Icon, label, active]) => (
                <div key={label} className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 font-semibold ${active ? 'bg-[#E8F7F5] text-[#0F766E]' : 'text-[#626D7B]'}`}>
                  <Icon size={17} aria-hidden="true" />{label}
                </div>
              ))}
            </nav>
          </aside>
          <div className="min-w-0 p-5 sm:p-7">
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#626D7B]">Example workflow</p>
                <h2 className="text-2xl font-bold tracking-tight text-[#1F2937]">Main workshop kit</h2>
                <p className="mt-1 text-sm text-[#626D7B]">Brisbane workshop · First-aid room</p>
              </div>
              <span className="rounded-full bg-[#E8F7F5] px-3 py-1.5 text-xs font-bold text-[#0F766E]">Check in progress</span>
            </div>
            <div className="overflow-hidden rounded-xl border border-[#D9E1E7]">
              <div>
                <div className="grid grid-cols-[minmax(0,1fr)_88px_18px] gap-2 bg-[#F4F6F8] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[#626D7B] sm:grid-cols-[minmax(0,1fr)_130px_110px_22px] sm:gap-3 sm:text-[11px] sm:tracking-[0.12em]">
                  <span>Item</span><span className="hidden sm:block">Entered expiry</span><span>Status</span><span />
                </div>
                {productItems.map((item) => (
                  <div key={item.name} className="grid grid-cols-[minmax(0,1fr)_88px_18px] items-center gap-2 border-t border-[#D9E1E7] px-4 py-4 text-sm sm:grid-cols-[minmax(0,1fr)_130px_110px_22px] sm:gap-3">
                    <span className="truncate font-semibold text-[#1F2937]">{item.name}</span>
                    <span className="hidden text-[#626D7B] sm:block">{item.date}</span>
                    <span className={`w-fit rounded-full px-2.5 py-1 text-[11px] font-bold ${item.tone === 'warning' ? 'bg-[#FFF7E6] text-[#9A5B00]' : 'bg-[#E8F8F1] text-[#087A56]'}`}>{item.state}</span>
                    <ChevronRight size={15} className="text-[#9CA3AF]" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <aside className="border-t border-[#D9E1E7] bg-[#FFF9ED] p-6 md:border-l md:border-t-0">
            <div className="mb-5 flex items-center gap-2 text-[#9A5B00]"><AlertTriangle size={21} aria-hidden="true" /><span className="text-sm font-bold">Needs review</span></div>
            <div className="mb-5 rounded-xl bg-white p-4 ring-1 ring-[#E8D5A6]">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8A651B]">Example item</p>
              <p className="mt-2 font-bold text-[#1F2937]">Gauze swabs</p>
              <p className="mt-1 text-sm leading-relaxed text-[#626D7B]">The entered expiry date is approaching. Confirm the item and plan the next action.</p>
            </div>
            <div className="rounded-lg bg-[#0F766E] px-4 py-3 text-center text-sm font-bold text-white">Record follow-up</div>
            <p className="mt-4 text-xs leading-relaxed text-[#626D7B]">Example only. Product details may change as SafetySight develops.</p>
          </aside>
        </div>
      </div>
      <p className="mt-3 text-xs font-medium text-[#626D7B]">Concept preview. Example data only. Product details may change as SafetySight develops.</p>
    </div>
  )
}

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div id="top" className="min-h-screen bg-[#F4F6F8] text-[#1F2937]">
      <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
        <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between rounded-full border border-white/70 bg-white/90 px-4 shadow-[0_10px_35px_rgba(16,42,67,0.10)] backdrop-blur-xl sm:px-6">
          <Brand className="h-12 w-auto" />
          <div className="hidden items-center gap-7 text-sm font-semibold text-[#626D7B] md:flex">
            <a href="#product" className="hover:text-[#0F766E]">Product</a><a href="#workflow" className="hover:text-[#0F766E]">How it works</a><a href="#pricing" className="hover:text-[#0F766E]">Pricing</a><a href="#about" className="hover:text-[#0F766E]">About</a><a href="#scope" className="hover:text-[#0F766E]">Scope</a>
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            <a href={SIGN_IN_URL} className="px-2 py-2 text-sm font-semibold text-[#626D7B] hover:text-[#0F766E]">Sign in</a><PrimaryLink className="min-h-10 px-5 py-2">Sign up</PrimaryLink>
          </div>
          <button type="button" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)} className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#1F2937] hover:bg-[#E8F7F5] md:hidden">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="mx-auto mt-2 max-w-[1360px] rounded-2xl border border-[#D9E1E7] bg-white p-4 shadow-xl md:hidden">
            <div className="grid gap-1 text-sm font-semibold text-[#374151]">
              {[["#product", "Product"], ["#workflow", "How it works"], ["#pricing", "Pricing"], ["#about", "About"], ["#scope", "Scope"]].map(([href, label]) => <a key={href} href={href} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-3 hover:bg-[#E8F7F5]">{label}</a>)}
              <a href={SIGN_IN_URL} className="rounded-lg px-3 py-3 hover:bg-[#E8F7F5]">Sign in</a><PrimaryLink className="mt-2 w-full">Sign up</PrimaryLink>
            </div>
          </div>
        )}
      </nav>

      <header className="relative overflow-hidden pt-20 sm:pt-24">
        <div className="absolute inset-0">
          <img src="/images/safetysight-workplace-check.png" alt="A site worker checking a first-aid kit" className="h-full w-full object-cover object-[63%_center]" />
          <div className="absolute inset-0 hero-image-wash" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pb-60 pt-16 sm:px-8 sm:pb-72 sm:pt-24 lg:pb-80 lg:pt-28">
          <div className="max-w-2xl fade-up">
            <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0F766E]">Turning Chaos into Clarity</div>
            <h1 className="font-serif-display text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[0.96] tracking-[-0.045em] text-[#1F2937]">A clearer way to manage <span className="text-[#1FB6A6]">first-aid kit checks.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#626D7B] sm:text-xl">SafetySight helps teams record kit checks, track entered expiry dates and keep a clearer history across locations.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink />
              <a href="#workflow" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#D9E1E7] bg-white/86 px-6 py-3 text-sm font-bold text-[#1F2937] backdrop-blur-sm transition hover:border-[#0F766E] hover:text-[#0F766E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]">See the workflow <ChevronRight size={17} aria-hidden="true" /></a>
            </div>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#626D7B]">Available for Australian businesses. Create an account with any email address and verify it securely before setup.</p>
          </div>
        </div>
      </header>

      <section id="product" className="relative z-10 -mt-48 scroll-mt-24 px-4 pb-14 sm:-mt-56 sm:px-6 lg:-mt-64"><ProductPreview /></section>

      <section id="workflow" className="scroll-mt-20 bg-[#0F766E] py-14 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">A simple workflow for real workplaces</div>
          <div className="grid gap-9 md:grid-cols-3 md:gap-0">
            {workflow.map(({ number, title, copy, Icon }, index) => (
              <div key={number} className={`relative grid grid-cols-[50px_1fr] gap-4 md:px-8 ${index === 0 ? 'md:pl-0' : 'md:border-l md:border-white/20'}`}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold">{number}</span>
                <div><Icon size={28} className={index === 1 ? 'text-[#F59E0B]' : 'text-[#1FB6A6]'} aria-hidden="true" /><h2 className="mt-4 text-xl font-bold">{title}</h2><p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">{copy}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#D9E1E7] bg-[#F4F6F8] py-10">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:px-8 md:grid-cols-[220px_1fr] md:items-center md:gap-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0F766E]">What is a SightScan?</p>
          <p className="text-base leading-relaxed text-[#626D7B]">A SightScan is one use of SafetySight’s kit-scanning workflow. Each use counts towards the SightScan allowance included with your plan.</p>
        </div>
      </section>

      <section id="scope" className="scroll-mt-20 bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-0">
          <div className="md:pr-14">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0F766E]">What we’re building</p>
            <h2 className="font-serif-display text-4xl leading-tight text-[#1F2937]">Practical first-aid kit record keeping.</h2>
            <ul className="mt-7 space-y-5">
              {['Record consistent kit checks across locations', 'Track expiry dates entered by your team', 'Keep a history of checks and follow-up actions'].map((item) => <li key={item} className="flex gap-3 text-base leading-relaxed text-[#626D7B]"><Check size={20} className="mt-0.5 shrink-0 text-[#1FB6A6]" aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
          <div className="border-t border-[#D9E1E7] pt-10 md:border-l md:border-t-0 md:pl-14 md:pt-0">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#626D7B]">Clear about the limits</p>
            <h2 className="font-serif-display text-4xl leading-tight text-[#1F2937]">A tool to support your process, not certify it.</h2>
            <ul className="mt-7 space-y-5 text-base leading-relaxed text-[#626D7B]"><li>SafetySight does not provide legal advice or certify WHS compliance.</li><li>It does not replace workplace procedures, qualified advice or human checks.</li><li>Product features and the interface may change as SafetySight develops.</li></ul>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 grid bg-[#F4F6F8] lg:grid-cols-[58%_42%]">
        <div className="aspect-[16/9] overflow-hidden lg:aspect-auto lg:min-h-[500px]"><img src="/images/safetysight-founders-studio.png" alt="SafetySight founders Taj Kilchester, Matthew O'Shea and Philip Kasselman" className="h-full w-full object-cover object-center" /></div>
        <div className="flex items-center px-6 py-16 sm:px-12 lg:px-14 lg:py-16">
          <div className="max-w-xl"><div className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#626D7B]">The people behind SafetySight</div><h2 className="font-serif-display text-4xl leading-[1.05] text-[#1F2937] sm:text-5xl">Built by a young Australian team focused on simpler first-aid readiness.</h2><p className="mt-6 text-lg leading-relaxed text-[#626D7B]">We started SafetySight after seeing how often kit records rely on paper, spreadsheets and memory. We’re building a clearer workflow with input from the businesses that will use it.</p><p className="mt-6 font-semibold text-[#1F2937]">Taj Kilchester · Matthew O’Shea · Philip Kasselman</p></div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-20 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#626D7B]">Choose a plan</div>
              <h2 className="max-w-xl font-serif-display text-4xl leading-[1.05] text-[#1F2937] sm:text-5xl">A practical place to start, with room to grow.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-[#626D7B] lg:justify-self-end">Choose a plan based on the number of locations, kits and SightScans your organisation needs.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className={`relative flex min-h-[390px] flex-col rounded-[1.25rem] border p-7 sm:p-8 ${plan.featured ? 'border-[#1FB6A6] bg-[#E8F7F5] shadow-[0_18px_45px_rgba(31,41,55,0.09)]' : 'border-[#D9E1E7] bg-white'}`}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0F766E]">{plan.name}</p>
                <div className="mt-5 flex min-h-[54px] items-end gap-2">
                  <p className={`${plan.price.length > 8 ? 'text-3xl' : 'text-4xl'} font-extrabold tracking-[-0.035em] text-[#1F2937]`}>{plan.price}</p>
                  <p className="pb-1 text-sm font-semibold text-[#626D7B]">{plan.priceDetail}</p>
                </div>
                <h3 className="mt-6 max-w-xs text-2xl font-bold leading-tight text-[#1F2937]">{plan.bestFor}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#626D7B]">{plan.description}</p>
                <div className="my-7 h-px bg-[#D9E1E7]" />
                <ul className="flex-1 space-y-4">
                  {plan.included.map((item) => <li key={item} className="flex items-start gap-3 text-sm font-semibold leading-relaxed text-[#374151]"><Check size={18} className="mt-0.5 shrink-0 text-[#1FB6A6]" aria-hidden="true" />{item}</li>)}
                </ul>
                <a href={plan.href} className={`mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2 ${plan.featured ? 'bg-[#0F766E] text-white' : 'border border-[#D9E1E7] text-[#0F766E] hover:border-[#0F766E] hover:bg-[#E8F7F5]'}`}>{plan.cta}<ArrowRight size={17} aria-hidden="true" /></a>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-[#626D7B]">Prices are in Australian dollars. Standard and Pro use a consistent A$30 per-location monthly rate. Enterprise pricing is negotiated. Standard add-ons increase capacity one location at a time, up to 5 locations total.</p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <img src="/images/queensland-landscape.png" alt="Regional Queensland landscape" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" /><div className="absolute inset-0 -z-10 bg-white/80 backdrop-blur-[1px]" />
        <div className="mx-auto max-w-4xl px-5 text-center">
          <div className="mb-5 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#626D7B]">Start free</div>
          <h2 className="font-serif-display text-4xl leading-tight text-[#1F2937] sm:text-6xl">Start organising your first-aid kits.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#626D7B]">Create your account with any email address. Verify it with a one-time code, then create or join your workplace.</p>
          <div className="mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
            {['Verify your email', 'Create or join a workplace', 'Add people and locations'].map((step, index) => <div key={step} className="rounded-xl border border-white/80 bg-white/70 p-4 text-sm font-semibold text-[#374151] backdrop-blur-sm"><span className="mr-2 text-[#0F766E]">0{index + 1}</span>{step}</div>)}
          </div>
          <PrimaryLink className="mt-8">Create free account</PrimaryLink>
        </div>
      </section>

      <footer className="bg-[#1F2937] py-10 text-[#D9E1E7]">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between"><div><a href="#top" aria-label="SafetySight home" className="inline-flex w-fit"><img src="/images/safetysight-logo.png" alt="SafetySight" className="w-44 object-contain" /></a><p className="mt-1 text-xs font-semibold tracking-wide text-[#AEB8C5]">Turning Chaos into Clarity</p></div><div className="flex flex-wrap gap-x-7 gap-y-3 text-sm"><a href="#product" className="hover:text-white">Product</a><a href="#workflow" className="hover:text-white">How it works</a><a href="#pricing" className="hover:text-white">Pricing</a><a href="#scope" className="hover:text-white">Product scope</a><a href="#about" className="hover:text-white">About</a><a href="/privacy" className="hover:text-white">Privacy</a><a href="/terms" className="hover:text-white">Terms</a><a href="mailto:info.safetysight@gmail.com?subject=Security%20enquiry" className="hover:text-white">Security</a></div><p className="text-xs">© {new Date().getFullYear()} SafetySight</p></div>
      </footer>
    </div>
  )
}
