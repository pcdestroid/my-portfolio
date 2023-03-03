import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    useEffect(() => {
        function criarTimer(segundos) {
            const data = new Date(segundos * 1000);
            return data.toLocaleTimeString('pt-BR', {
                hour12: false,
                timeZone: 'UTC'
            });
        }
        const relogio = document.querySelector('.relogio');
        const iniciar = document.querySelector('.iniciar');
        const pausar = document.querySelector('.pausar');
        const zerar = document.querySelector('.zerar');
        let segundos = 0;
        let timer;

        function iniciarRelogio() {
            timer = setInterval(() => {
                segundos++;
                relogio.innerHTML = criarTimer(segundos);
        
            }, 1000)
        }

        iniciar.addEventListener('click', function (e) {
    
            clearInterval(timer)
            iniciarRelogio()
            relogio.style.color = 'white'
        });

        pausar.addEventListener('click', function (e) {
            clearInterval(timer)
            relogio.style.color = 'blue'
        });

        zerar.addEventListener('click', function (e) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0
            relogio.style.color = 'white'
        });


    }, []);

    return (
        <>
            <Head>
                <title>Timer</title>
            </Head>
            <article className="texto-topo">
                <p>Timer</p>
            </article>
            <section className='timer-container'>

                <p className='relogio'>00:00:00</p>
                <p>
                    <button className="iniciar">Iniciar</button>
                    <button className="pausar">Pausar</button>
                    <button className="zerar">Zerar</button>
                </p>
            </section>
        </>
    )
}
