//Es uno de los modulos mas importantes de Nodejs
const fs = require('node:fs') //A partir de node 16 se recomiendo poner :

const stats = fs.statSync('./apuntes.txt')
console.log(
    stats.isFile(),//Si es un fichero
    stats.isDirectory(),//Si es uin directorio
    stats.isSymbolicLink(),//Si es un elnace simbólico
    stats.size,//Tamaño en bytes
)
        