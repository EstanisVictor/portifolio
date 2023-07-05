import '../../styles/globals.scss'
import Head from 'next/head'
import Header from '@/components/Header'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Estanis | Portifólio</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
