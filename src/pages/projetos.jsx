import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Projetos</title>
            </Head>

            <article className="texto-topo">
                <p>Projetos</p>
            </article>
        </>
    )
}