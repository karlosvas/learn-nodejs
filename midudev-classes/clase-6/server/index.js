import express from "express";
import logger from 'morgan';
import { Server } from 'socket.io'
import { createServer } from 'node:http'


const port = process.env.PORT ?? 3000;
const app = express();
const server = createServer(app)
const io = new Server(server)

io.on('conection', (socket) => {
    console.log("a user has conected")

    socket.on('disconected', () => {
        console.log("a user has disconected")
    })

    socket.on('chat message', (msg) => {
        console.log('mensaje: ' + msg)
    })
})
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/client/index.html')
})

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})