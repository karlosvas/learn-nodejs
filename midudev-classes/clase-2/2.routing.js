import { createServer } from 'node:http'
const PORT = process.env.PORT ?? 1234
import dittoJSON from './pokemon/ditto.json'

const processRequest = (req, res) => {
  const { method, url } = req
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          return res.end('404 error')
      }
    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''
          // Escuchar el evento data
          req.on('data', chunk => {
            body += chunk
          })
          req.on('end', () => {
            const data = JSON.parse(body)
            // guardar info en base de datos
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })
        }
          break
      }
  }
}

const server = createServer(processRequest)

server.listen(PORT, "localhost", () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})