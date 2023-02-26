import '/src/styles/globals.css'
import Music from '/src/components/music.jsx'
import Headpage from '/src/components/Headpage.jsx'
import Menu from '/src/components/Menu.jsx'
import Animation from '/src/components/Animation.jsx'

export default function App({ Component, pageProps }) {
  return <>
    <nav className='menu'><Menu /><Music /></nav>
    <Headpage />
    <Component {...pageProps} />
    {Animation()}
  </>
}
