const WebSocket = require('ws');

const clients = [];
const wss = new WebSocket.Server({ port: 8443 }); //server: req.socket.server
wss.on('connection', (ws) => {

    console.log('client: ok');
    ws.send('server: ok');
    clients.push(ws);

    ws.on('message', (message) => {
        console.log(`client: ${message}`);
        clients.forEach(client => client.send(`server: ${message}`));
    });
});

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); //'GET, POST, PUT, DELETE'
    res.status(200).send('starting websocket server...');
}