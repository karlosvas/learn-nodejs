import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createMovieRouter } from './public/routes.js';
import { corsMiddleware } from './public/cors.js';
import { MovieModel } from "./public/mysql.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicPath = join(__dirname, "public");

const app = express();
const PORT = process.env.PORT;

app.set("view engine", 'ejs')
app.set("views", __dirname + '/views')

app.use(express.json())
app.use(corsMiddleware());
app.disable('x-powered-by');

app.use('/api/movies', createMovieRouter({ movieModel: MovieModel }));
app.use(express.static(publicPath));

// // Ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.render("index", {
    text: "Inicio de la pagina",
  });
});

app.get('/movies', (req, res, e) => {
  try {
    fetch('http://localhost:1234/api/movies')
      .then(res => res.json())
      .then(movies => {
        res.render("movies", {
          text: "Inicio de la pagina",
          movies: movies
        });
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('No se cargo la API');
      });
  } catch (e) {
    console.error(e);
    res.status(500).send('Error interno del servidor');
  }
});


// Manejador de errores
app.use((req, res, next) => {
  res.status(500).render('500', {
    info: "Fallo interno del servidor, Error 505 😓"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://www.localhost:${PORT}`);
});

