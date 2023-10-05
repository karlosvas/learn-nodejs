import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { router } from "./router/rutasweb.js"
import { router as mascotas } from "./router/mascotas.js";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicPath = join(__dirname, "public");

const app = express();
const PORT = process.env.PORT;

// Conexion a base de datos.
const connectString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clusterm.ow4v8a3.mongodb.net/${process.env.DB}?retryWrites=true&w=mojotory`
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
