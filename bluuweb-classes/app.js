import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { router } from "./router/Rutasweb.js"
import { router as mascotas } from "./router/Mascotas.js";


dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicPath = join(__dirname, "public");

const app = express();
const PORT = process.env.PORT;

// Body parse
app.use(bodyParser.urlencoded({ extend: false }))
app.use(bodyParser.json())

// Conexion a base de datos.
const connectString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clusterm.ow4v8a3.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;

mongoose.connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true, })
    .then(() => console.log("Base de datos conectada"))
    .catch(e => console.log(e))

app.set("view engine", 'ejs')
app.set("views", __dirname + '/views')

app.use(express.static(publicPath));
app.use("/", router)
app.use("/mascotas", mascotas)

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "ERROR"
    });
});

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto http://localhost:${PORT}`);
});
