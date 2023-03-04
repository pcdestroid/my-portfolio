import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to my world!</title>
      </Head>
      <article className="font-exo texto-central">
        <p>BEM-VINDO AO MEU MUNDO!</p>
        <p>ONDE A CRIATIVIDADE ENCONTRA </p>
        <p> A FUNCIONALIDADE</p>
      </article>

      <article className="font-exo-small texto-final">
        <p>Da ideia ao código, do código à solução.</p>
        <p>Aqui está o meu portfólio de projetos de programação.</p>
      </article>

      { }
    </>
  )
}
