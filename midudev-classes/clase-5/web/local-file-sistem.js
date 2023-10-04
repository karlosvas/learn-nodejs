import { createApp } from "../createApp.js";
import { MovieModel } from "../models/local-file-system/movie.js";

createApp({ movieModel: MovieModel })