import '@/styles/globals.css'
import Music from '@/components/music'
import Headpage from '@/components/Headpage'
import Menu from '@/components/Menu'
import Animation from '@/components/Animation'

export default function App({ Component, pageProps }) {
  return <>
    <nav className='menu'><Menu /><Music /></nav>
    <Headpage />
    <Component {...pageProps} />
    {Animation()}
  </>
}
