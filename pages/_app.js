import '../styles/globals.css'
import Head from 'next/head'

function GA() {
  const id = process.env.NEXT_PUBLIC_GA_ID
  if (!id) return null
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${id}');`,
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
        <link rel="icon" type="image/png" href="/images/SAFETYSIGHT%20(15).PNG" />
        <link rel="apple-touch-icon" href="/images/SAFETYSIGHT%20(15).PNG" />
        <link rel="shortcut icon" href="/images/SAFETYSIGHT%20(15).PNG" />
      </Head>
      <GA />
      <Component {...pageProps} />
    </>
  )
}
