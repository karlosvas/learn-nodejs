import { createApp } from "../createApp.js";
import { MovieModel } from "../models/mysql/movie.js";

createApp({ movieModel: MovieModel })