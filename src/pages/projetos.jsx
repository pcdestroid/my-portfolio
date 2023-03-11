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

            <div className="font-exo projetos">
                <a href="https://chat-neon-six.vercel.app/?sala=Mundo&chave=Bitcoin" target={'_blank'}>CriptoChat</a>
                <a href="https://pcdestroid-login-com-senha-e-cadastro.vercel.app/" target={'_blank'}>Login & Register</a>
            </div>

        </>
    )
}