import { useEffect } from 'react'
import Head from 'next/head'
import Link from "next/link"


export default function Home() {
    useEffect(() => {
        ConstruirTabela()
    }, [])

    function ConstruirTabela() {
        let html = '<table cellpadding=0 cellspacing=0>'
        html += `<tr class="top-line-table"><td>Salas</td><td>Jogador</td><td>Jogador 02</td><td>...</td>`
        for (let row = 0; row < 5; row++) {
            html += '<tr>';
            for (let column = 0; column < 1; column++) {
                html += `<td><div><a class="pixel-index" href="/sala/${row + 1}">Sala ${row + 1}</div></td>`
                html += `<td><div> Player 01</div></td>`;
                html += `<td><div> Player 02</div></td>`;
                html += `<td><div> 0/100</div></td>`;
            }
            html += '</tr>'
        }
        html += '</table>';

        // Selecionar o elemento com a classe "salas-container" e definir seu innerHTML como o HTML gerado
        const salasContainer = document.querySelector('.salas-container')
        if (salasContainer) {
            salasContainer.innerHTML = html
        }
    }

    return (
        <>

            <Head>
                <title>Salas</title>
            </Head>

            <article className="texto-topo">
                <p>Salas</p>
            </article>
            <section className='salas-container'>

            </section>

        </>
    )
}


