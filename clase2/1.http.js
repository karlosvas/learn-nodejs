const http = require('node:http')
const fs = require('node:fs')
const disiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/http; charset=utf-8')

  if (req.url === '/') {
    res.end('Bienvendos a mi página de inicio')
  } else if (req.url === '/contacto') {
    res.end('Contacto')
  } else if (req.url === '/cielo') {
    res.setHeader('Content-Type', 'image/png')
    fs.readFile('./cielo.png', (err, data) => {
      if (err) {
        res.satusCode = 500
        res.end('500 Internal server error')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else {
    res.statusCode = 404
    res.end('404')
  }
}

const server = http.createServer(processRequest)

server.listen(disiredPort, () => {
  console.log(`server listening on port http://localhost:${disiredPort}`)
})
