import Head from 'next/head'
import Layout from '@components/Layout'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </div>
  )
}
