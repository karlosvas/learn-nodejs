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