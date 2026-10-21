import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'

const GOOGLE_ANALYTICS_ID = 'G-WDYX3E9F5B'

function GA() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ANALYTICS_ID}');`,
        }}
      />
    </>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <GA />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
