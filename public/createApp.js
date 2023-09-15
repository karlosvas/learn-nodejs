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
  app.disable('x-powered-by');
  app.use(express.static('public'));

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
