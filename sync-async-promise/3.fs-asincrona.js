const fs = require('node:fs')
//Podremos utilizar el metodo de readFileSync() para leer texto de forma sincrona,
//y readFile() para leerlo de forma asincromna
console.log("Leyendo el primer archivo.....")
fs.readFile('archivos/archivo1.txt', 'utf-8', (err, text) => {
    console.log(text)
    /*El macanismo que utiliza poara asegurarse que una vez que a leido el archivo va a ejecutar el código, se utilizan los callbacks.
    son funciones que se ejecutan cuando*/
});

console.log("Leyendo el segundo archivo.....")
fs.readFile('archivos/archivo2.txt', 'utf-8',(err, text) => {
    console.log(text)
})

console.log("Leyendo el tercer archivo.....")
fs.readFile('archivos/archivo3.txt', 'utf-8',(err, text) => {
    console.log(text)    
})