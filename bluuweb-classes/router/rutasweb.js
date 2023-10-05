import express from "express";
export const router = express.Router()

router.get("/", (req, res) => {
    res.render("index", { titulo: "Mi tutlulo dinamico" });
});

router.get("/servicios", (req, res) => {
    res.render("servicios", { tituloServicios: "Este es un mensaje dinamico de servicio" });
});


