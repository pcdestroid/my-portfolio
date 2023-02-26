import Head from 'next/head';

function Headpage() {
    return (
        <>
            <Head>
                <link rel="icon" href="./favicon.png" type="image/png" />
                <link rel="icon" href="favicon.png" />
                <link rel="stylesheet" href="/css/styles.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@700&family=Space+Mono&display=swap" rel="stylesheet" />
            </Head>
        </>
    )
}

export default Headpage;