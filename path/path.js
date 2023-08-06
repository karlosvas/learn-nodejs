const path = require('node:path')
// Unir rutas con path.join
console.log(path.sep)
// Esto indica la barra separadora de carpetas según el sistema operativo.
const filePath = path.join('content', 'subfolder', 'text.txt')
console.log(filePath)
// Para obtener el nombre del fichero de una ruta utilizamos base()
const base = path.basename(filePath)
const base2 = path.basename('Documents/learn-nodejs/path/path.js')
console.log(base)
console.log(base2)
// Para obtener el nombre del fichero y cquitar la extensión agregamos una coma.
const imaginePaswords = path.basename('/tmp/prank-secret/password.txt', '.txt')
console.log(imaginePaswords)
// Saber la extension del fichero buscado.
const extension = path.extname('image.png')
console.log(extension)
