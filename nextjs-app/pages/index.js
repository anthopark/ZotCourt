import Head from 'next/head'
import Layout from '@components/Layout'
import Main from '@components/Main'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
      <Main ></Main>


    </div>
  )
}
