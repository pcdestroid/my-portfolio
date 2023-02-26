import '@/styles/globals.css'
import Music from '@/components/Music.jsx'
import Menu from '@/components/Menu.jsx'
import Animation from '@/components/Animation.jsx'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return <>

    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <nav><Menu /><Music /></nav>
    <Component {...pageProps} />
    {Animation()}
  </>
}
