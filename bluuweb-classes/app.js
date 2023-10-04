// import http from 'http'

// const server = http.createServer((req, res) => {
//     res.end("Respuesta")
// })

// const PORT = 3000
// server.listen(PORT, () => {
//     console.log(`Escuchando en el puerto http://localhost:${PORT}`)
// })

import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicPath = join(__dirname, "public");

const app = express();
const PORT = 3000;

app.set("view engine", 'ejs')
app.set("views", __dirname + '/views')

app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.render("index", { titulo: "Mi tutlulo dinamico" });
});

app.get("/servicios", (req, res) => {
    res.render("servicios", { tituloServicios: "Este es un mensaje dinamico de servicio" });
});

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "ERROR"
    });
});

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto http://localhost:${PORT}`);
});
