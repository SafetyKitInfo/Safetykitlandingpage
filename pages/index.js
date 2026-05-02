import Head from 'next/head'
import LandingPage from '../components/LandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://safetysight.net'

const PAGE_TITLE = 'First Aid Kit Compliance Software for SMEs AU/QLD | SafetySight'
const PAGE_DESCRIPTION =
  'SafetySight is first aid kit compliance software for ECEC centres and healthcare organisations across Australia and New Zealand. Mobile scanning, automated expiry alerts, and audit-ready reports — built to support WHS and NQF obligations.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SafetySight',
  description:
    'First aid kit compliance software for ECEC centres and healthcare organisations across Australia and New Zealand.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  offers: {
    '@type': 'Offer',
    description: '30-day free pilot — no credit card required',
  },
  areaServed: ['AU', 'NZ'],
  url: SITE_URL,
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SafetySight" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/images/safetysight-rectangle.png`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/images/safetysight-rectangle.png`} />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <main>
        <LandingPage />
      </main>
    </>
  )
}
