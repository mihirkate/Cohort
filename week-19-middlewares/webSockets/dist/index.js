"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
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
const wss = new ws_1.WebSocketServer({ server: httpServer });
wss.on('connection', function connection(ws) {
    ws.on('message', function message(data, isBinary) {
        console.log("recieved %s", data);
    });
    ws.send('Hello! Message From Server!!');
});
