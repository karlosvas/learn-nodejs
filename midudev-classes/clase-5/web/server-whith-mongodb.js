import { createApp } from "../createApp.js";
import { MovieModel } from "../models/mongodb/movie.js";

createApp({ movieModel: MovieModel })