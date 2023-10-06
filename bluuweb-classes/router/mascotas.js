import express from "express";
export const router = express.Router()
import { Mascota } from "../models/mascota.js";

router.get("/", async (req, res, err) => {
    try {
        const arrMascotasDB = await Mascota.find()
        res.render("mascotas", { arrayMascotas: arrMascotasDB })
    } catch (err) {
        console.log(err)
    }

})

router.get("/crear", (req, res) => {
    res.render("crear")
})

router.post("/", async (req, res) => {
    const body = req.body
    console.log(body)

    try {
        await Mascota.create(body)
        // Estas dos líneas hacen lo mismo.
        // const mascotaDB = new Mascota(body).
        // await mascotaDB.save().

        // => .save() es un metodo de moongouse, para guardaelo en MongoDB.

        // Redirecciona al usuario a una neuva url.
        res.redirect("/mascotas")

    } catch (err) {
        console.log(err)
    }
})