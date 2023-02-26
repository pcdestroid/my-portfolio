import '/src/styles/globals.css'
import Music from '/src/components/music'
import Headpage from '/src/components/Headpage'
import Menu from '/src/components/Menu'
import Animation from '/src/components/Animation'

export default function App({ Component, pageProps }) {
  return <>
    <nav className='menu'><Menu /><Music /></nav>
    <Headpage />
    <Component {...pageProps} />
    {Animation()}
  </>
}
