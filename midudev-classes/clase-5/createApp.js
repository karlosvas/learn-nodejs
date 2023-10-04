import express, { json } from 'express';
import { createMovieRouter } from './routes/movies.js';
import { corsMiddleware } from './middleware/cors.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createApp = ({ movieModel }) => {
  const app = express();

  app.use(json());
  app.use(corsMiddleware());
  app.disable('x-powered-by'); // deshabilitar el header X-Powered-By: Express

  // Ruta para servir el archivo HTML
  app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'web', 'index.html');
    res.sendFile(filePath);
  });

  app.use('/movies', createMovieRouter({ movieModel }));

  // Manejador de errores
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Error interno del servidor');
  });

  const PORT = process.env.PORT || 1234;

  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
};


// import { readJSON } from './utils.js';
// EN EL FUTURO EL IMPORT SERA ASI:
// import movies from './movies.json' whith { type: 'json' }

/*
Como leer un json en ESModules
import fs from  'node:fs'
const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))
*/

/*
Como leer un json en ESModules recomendado por ahora
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const movies = readJSON('./movies.json')
*/



// // métodos normales: GET/HEAD/POST
// // métodos complejos: PUT/PATCH/DELETE

// // CORS PRE-Flight
// // OPTIONS