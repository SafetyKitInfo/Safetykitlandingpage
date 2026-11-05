import React from 'react'
import { ArrowRight, Check } from 'lucide-react'

const SIGN_UP_URL = 'https://app.safetysight.net/sign-up'

const plans = [
  {
    name: 'Free', price: 'A$0', priceDetail: '', bestFor: 'Get your first kits organised',
    description: 'Start with one site, build a more consistent check routine and see how SafetySight fits your team.',
    included: ['1 location', '3 first-aid kits', '5 trial SightScans'], cta: 'Create free account', href: SIGN_UP_URL,
  },
  {
    name: 'Standard', price: 'A$90', priceDetail: '/month', bestFor: 'Keep routine checks moving as you grow',
    description: 'A practical plan for small teams managing several workplaces and kits.',
    included: ['3 locations', '15 first-aid kits', '20 SightScans each month'], cta: 'Start Standard', href: SIGN_UP_URL, featured: true,
  },
  {
    name: 'Standard add-on', price: 'A$30', priceDetail: '/month per location', bestFor: 'Add capacity without changing plans',
    description: 'Extend Standard one location at a time as your organisation expands.',
    included: ['1 additional location', '5 additional first-aid kits', '5 additional SightScans each month', 'Up to 5 locations total'], cta: 'Add to Standard', href: SIGN_UP_URL,
  },
  {
    name: 'Pro', price: 'A$300', priceDetail: '/month', bestFor: 'Run a larger operation with predictable pricing',
    description: 'Ten locations at the same A$30 per-location monthly rate.',
    included: ['10 locations', '50 first-aid kits', '60 SightScans each month'], cta: 'Choose Pro', href: SIGN_UP_URL,
  },
  {
    name: 'Enterprise', price: 'Custom quote', priceDetail: '', bestFor: 'Coordinate a larger rollout',
    description: 'Shape a negotiated package around your organisation, rollout needs and required support.',
    included: ['Allowances agreed for your rollout', 'Services agreed for your organisation'], cta: 'Contact sales',
    href: 'mailto:info.safetysight@gmail.com?subject=SafetySight%20Enterprise',
  },
]

export default function PricingSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#626D7B]">Choose a plan</div>
            <h1 className="max-w-xl font-serif-display text-4xl leading-[1.05] text-[#1F2937] sm:text-5xl">A practical place to start, with room to grow.</h1>
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
              <h2 className="mt-6 max-w-xs text-2xl font-bold leading-tight text-[#1F2937]">{plan.bestFor}</h2>
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
  )
}
