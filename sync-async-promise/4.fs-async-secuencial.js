// Podremos utilizar el método de readFileSync() para leer texto de forma sincrona,
// y readFile() para leerlo de forma asincromna
/* Esto solo en los modulos nativos que no tienen promesas nativas.
const {promisify} = require('node:util')
const readFilePromise = promise(fs.readFile) */

// Para poder utilizarlas con commondjs es necesario utilizarlo dentro del cuerpo de uan,
// funcion, por lo que invocamos a  una funcion autoinvocada.
// IFE - Inmediatly invaked Function Expresion
const { readFile } = require('node:fs/promises')

async function init () {
  console.log('Leyendo el primer archivo.....')
  const firstText = await readFile('archivos/archivo1.txt', 'utf-8')
  console.log(firstText)

  console.log('Leyendo el segundo archivo.....')
  const secondText = await readFile('archivos/archivo2.txt', 'utf-8')
  console.log(secondText)

  console.log('Leyendo el tercer archivo.....')
  const thirdText = await readFile('archivos/archivo3.txt', 'utf-8')
  console.log(thirdText)
}
init()
