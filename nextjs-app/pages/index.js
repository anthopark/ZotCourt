import Head from 'next/head'
import Layout from '@components/Layout'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Zot Court+</title>
        <link rel="icon" type="image/svg+xml" href="/zot-favicon.svg" />
      </Head>
      <Layout />
    </div>
  )
}
