import '@/styles/globals.css'
import Music from '@/components/Music.jsx'
import Menu from '@/components/Menu.jsx'
import Animation from '@/components/Animation.jsx'

export default function App({ Component, pageProps }) {
  return <>
    <nav className='menu'><Menu /><Music /></nav>
    <Component {...pageProps} />
    {Animation()}
  </>
}
