const fs = require('node:fs')
// Podremos utilizar el metodo de readFileSync() para leer texto de forma sincxrona y readFile() para leerlo de forma asincromna
console.log('Leyendo el primer archivo.....')
const firstText = fs.readFile('archivos/archivo1.txt', 'utf-8')
console.log(firstText)

console.log('Leyendo el segundo archivo.....')
const secordText = fs.readFile('archivos/archivo2.txt', 'utf-8')
console.log(secordText)

console.log('Leyendo el tercer archivo.....')
const thirdText = fs.readFile('archivos/archivo3.txt', 'utf-8')
console.log(thirdText)
