// Podremos utilizar el método de readFileSync() para leer texto de forma sincrona,
// y readFile() para leerlo de forma asincromna
/* Esto solo en los modulos nativos que no tienen promesas nativas.
const {promisify} = require('node:util')
const readFilePromise = promise(fs.readFile) */

import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./archivos/archivo1.txt', 'utf-8'),
  readFile('./archivos/archivo2.txt', 'utf-8'),
  readFile('./archivos/archivo3.txt', 'utf-8')
]).then(([firstText, secondText, thirdText]) => {
  console.log('Primer texto:', firstText),
  console.log('segundo texto:', secondText),
  console.log('Tercer texto:', thirdText)
})
