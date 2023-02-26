import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

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
      <footer>
        <p>© 2023 by pcdestroid. All rights reversed.</p>
      </footer>
    </>
  )
}
