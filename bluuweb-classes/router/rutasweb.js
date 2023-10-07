import express from "express";
export const router = express.Router()

router.get("/", (req, res) => {
    res.render("index", { titulo: "Veterinaria Bernard" });
});

router.get("/servicios", (req, res) => {
    res.render("servicios", { tituloServicios: "Servicio al cliente" });
});


