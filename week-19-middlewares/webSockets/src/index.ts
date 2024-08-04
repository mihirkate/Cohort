import express from 'express';
import { WebSocketServer, WebSocket } from 'ws';

const app = express();
const port = 8080;

// Start the HTTP server
const httpServer = app.listen(port, () => {
    console.log(`HTTP server listening on port ${port}`);
    // Optional: Add a basic HTTP route
});


app.get('/', (req, res) => {
    res.send('Welcome to the WebSocket server!');
});

// Create the WebSocket server
const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', function connection(ws) {

    ws.on('message', function message(data, isBinary) {
        console.log("recieved %s", data);

    });

    ws.send('Hello! Message From Server!!');
});

