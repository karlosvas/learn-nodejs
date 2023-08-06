// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivos/archivo1.txt', 'utf-8')
  .then(text => {
    console.log('primer texto:', text)
  })

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivos/archivo2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto:', text)
  })

console.log('Leyendo el tercer archivo...')
fs.readFile('./archivos/archivo3.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto:', text)
  })