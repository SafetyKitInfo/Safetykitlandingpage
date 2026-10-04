import Head from 'next/head'
import LandingPage from '../components/LandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://safetysight.net'

const PAGE_TITLE = 'First Aid Kit Check Management for Australian Businesses | SafetySight'
const PAGE_DESCRIPTION =
  'SafetySight helps Australian teams record first-aid kit checks, track entered expiry dates, and keep a clearer history across locations.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SafetySight',
  description:
    'First-aid kit check management for Australian businesses.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    description: 'Sign up',
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
