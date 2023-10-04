import express, { json } from 'express';
import { createMovieRouter } from './public/routes.js';
import { corsMiddleware } from './public/cors.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { MovieModel } from "./public/mysql.js";
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createApp = ({ movieModel }) => {
  const app = express();

  app.use(json());
  app.use(corsMiddleware());
  app.disable('x-powered-by');

  // Ruta para servir el archivo HTML
  app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public/html/movies.html');
    res.sendFile(filePath);
  });

  app.use('/movies', createMovieRouter({ movieModel }));

  // Manejador de errores
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Error interno del servidor');
  });

  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://www.localhost:${PORT}`);
  });
};

createApp({ movieModel: MovieModel })
