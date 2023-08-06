// Process, argumentos de entrada, crea un array con la ruta, y los argumentos que le demos.
console.log(process.argv)

// Podemos controlar eventos del proceso
process.on('exit', () => {
  // limpiar los recursos
})

// Current woirking directory, sitio desde el que se ejecuta el proceso.
console.log(process.cwd())

// Platform, deveremos asignarle un valor en el proceso a VALOR.
console.log(process.env.VALOR)

/* Contrrolar el proceso, con 0 es que todo a ido bien y el proceso tiene que terminar,
con 1 es que ha habido un error y queremos que termine porque puede perjudicar al código */
process.exit(1)
