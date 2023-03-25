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
                <a href="https://create-svg-from-png-jpg-webp-bmp-gif-avif.vercel.app/" target={'_blank'}>Create SVG From Images</a>
                <a href="https://chat-gpt-por-meio-de-comandos-de-voz.vercel.app/" target={'_blank'}>CHATGPT by voice</a>
                <a href="https://chat-neon-six.vercel.app/?sala=Mundo&chave=Bitcoin" target={'_blank'}>CriptoChat</a>
                <a href="https://pcdestroid-login-com-senha-e-cadastro.vercel.app/" target={'_blank'}>Login & Register</a>
                <a href="https://speak-english-black.vercel.app/" target={'_blank'}>Speak English</a>
            </div>

        </>
    )
}