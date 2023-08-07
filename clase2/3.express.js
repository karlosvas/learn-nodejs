const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 1234
const dittoJSON = require('./pokemon/ditto.json')

app.disable('x-powered-by')
app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'aplication/json') return next()
  // console.log('mi primer middleware')
  // Traqkear la rquest a la base de datos
  // Revisar si el usuario tiene cookies
  let body = ''
  req.on('data', chunk => {
    body += chunk.toString()
  })
  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // mutar la request y meter la informacion en el rig.bod
    req.body = data
    next()
  })
})

app.get('/', (req, res) => {
  res.send('Esto es express')
})
app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
// req.body deberiamos guardar en base de datos
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<body style= background-color:black; ><img src="https://http.cat/[status_code]">')
})
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
