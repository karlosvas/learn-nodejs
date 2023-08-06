const os = require('node:os')
//Utilizando "Ctrl+." selecionadno los tres puntos del require nos cambuiara automaticamente a el módulo ECMAScript
console.log('Información sistema operativo')
console.log('--------------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Version sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus())
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('Uptime', os.uptime() / 60 / 60)