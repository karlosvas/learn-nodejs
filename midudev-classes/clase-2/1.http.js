import { createServer } from 'node:http' // protocolo HTTP
import { readFile } from 'node:fs'

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/plaine; charset=utf-8')

  if (req.url === '/') {
    res.end('Mi página se actualiza funciona bien')
  } else if (req.url === '/cielo') {
    readFile('./cielo.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.end('Contacto')
  } else {
    res.statusCode = 404 // Not Found
    res.end('404')
  }
}

const server = createServer(processRequest)

server.listen(desiredPort, "localhost", () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})