import express, { json } from 'express';
import { moviesRouter } from './routes/movies.js';
import { corsMidelware } from './midelwares/cors.js';
// import { readJSON } from './utils.js';

// EN EL FUTURO EL IMPORT SERA ASI:
//import movies from './movies.json' whith { type: 'json' }

/* Como leer un json en ESModules
import fs from  'node:fs'
const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))
*/

// Como leer un json en ESModules recomendado por ahora
// import { createRequire } from 'node:module';
// const require = createRequire(import.meta.url);
// const movies = require('./movies.json')

// const movies = readJSON('./movies.json')

const app = express()
app.use(json())
app.use(corsMidelware())
app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express

// métodos normales: GET/HEAD/POST
// métodos complejos: PUT/PATCH/DELETE

// CORS PRE-Flight
// OPTIONS

app.use('/', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, "localhost", () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
