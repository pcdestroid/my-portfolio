import { useState, useEffect } from "react";

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: "1",
                },
            },
            {
                params: {
                    id: "2",
                },
            },
        ],
        fallback: true,
    };
}

export async function getStaticProps(context) {
    const id = context.params.id;

    return {
        props: {
            id: id,
        },
    };
}

function Produtos(props) {
    const [message, setMessage] = useState("");
    const [ws, setWs] = useState(null);

    useEffect(() => {
        async function load() {

            console.log(await (await fetch("https://my-portfolio-kappa-lime.vercel.app/api/ws")).text());
            const newWs = new WebSocket("wss://my-portfolio-kappa-lime.vercel.app:8080");
            newWs.onmessage = (e) => {
                setMessage(e.data);
                console.log(e.data);
            };
            newWs.onopen = () => newWs.send("connection opened");
            newWs.onclose = () => console.log("closed!");
            setWs(newWs);
        }
        load();
    }, []);

    function call() {
        ws.send(document.getElementById("textarea").value);
    }

    return (
        <>
            <article className="texto-topo">
                <p> Sala {props.id}</p>
                <div id="message">{message}</div>
                <textarea id="textarea"></textarea>
                <button onClick={call}>send</button>
            </article>
        </>
    );
}

export default Produtos;
