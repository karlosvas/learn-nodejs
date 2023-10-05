import mongoose from "mongoose";

const Schema = mongoose.Schema

const mascotaSchema = new Schema({
    animal: String,
    nombre: String,
    descripcion: String
})

export const Mascota = mongoose.model("Mascota", mascotaSchema)