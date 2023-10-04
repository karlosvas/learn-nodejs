
export const frutas = ["platano", "manzana", "platano", "pera"]
export const dinero = 3000

import { frutas, dinero } from "./frutas.js"


frutas.forEach(item => {
    console.count(item)
})

console.log(dinero)