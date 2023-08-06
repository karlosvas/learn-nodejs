const http = require('node:http')
const { findAviablePort } = require('./10.free-port.js')

//   console.log(('request: recived'))
//   res.end('Hola a todos')
// })
// // No es recomendable utilizar 0 en produccion, perso si en modo desarollo
// server.listen(0, () => {
//   console.log(`server listening on port http://localhost:${server.address().port}`)
// })

const server = http.createServer((req, res) => {
  console.log('rquest recived')
})

findAviablePort(0).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})
