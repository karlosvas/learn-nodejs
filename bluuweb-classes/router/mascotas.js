import express from "express";
export const router = express.Router()
import { Mascota } from "../models/mascota.js";

router.get("/", async (req, res) => {
    try {
        const arrMascotasDB = await Mascota.find()
        res.render("mascotas", { arrayMascotas: arrMascotasDB })
    } catch (error) {
        console.log(error)
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
        // Estas dos líneas hacen lo mismo que await Mascota.create(body).
        // const mascotaDB = new Mascota(body).
        // await mascotaDB.save().

        // => .save() es un metodo de moongouse, para guardaelo en MongoDB.

        // Redirecciona al usuario a una neuva url.
        res.redirect("/mascotas")

    } catch (error) {
        console.log(error)
    }
})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const mascotaDB = await Mascota.findOne({ _id: id })

        res.render("detalle", {
            mascota: mascotaDB,
            error: false
        })

    } catch (error) {
        console.log(error)

        res.render("detalle", {
            error: true,
            mensaje: "No se ha encontrado el id selecionado"
        })
    }
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const mascotaDB = await Mascota.findByIdAndDelete({ _id: id })

        if (mascotaDB) {
            res.json({
                estado: true,
                mensaje: "Eliminado"
            })
        } else {
            res.json({
                estado: false,
                mensaje: "Fallo al eliminar!"
            })
        }

    } catch (error) {
        console.log(error)
    }
})

router.put("/:id", async (req, res) => {
    const id = req.params.id
    const body = req.body

    try {
        await Mascota.findByIdAndUpdate(id, body, { useFindAndModify: false })
        res.json({
            estado: true,
            mensaje: "Editado"
        })
    } catch (error) {
        console.lof(error)
        res.json({
            estado: false,
            mensaje: "Put failed"
        })
    }
})