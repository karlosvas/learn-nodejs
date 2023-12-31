import { randomUUID } from 'crypto';
import { readJSON } from '../../utils.js';

const movies = readJSON('./movies.json');

export class MovieModel {
    static async getAll({ genre }) {
        if (genre) {
            return movies.filter(
                movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
            )
        }
        return movies
    }
    static async getById({ id }) {
        const movie = movies.find(movie => movie.id == id)
        if (movie) return movie
        return movie
    }

    static async create({ input }) {
        // En base de datos
        const newMovie = {
            id: randomUUID(), // uuid v4
            ...input
        }
        // Esto no sería REST, porque estamos guardando
        // El estado de la aplicación en memoria
        movies.push(newMovie)
        return newMovie
    }

    static async delate({ id }) {
        const movieIndex = movies.findIndex(movie => movie.id == id)
        if (movieIndex == -1) return false

        movies.splice(movieIndex, 1)
        return true
    }

    static async update({ id, input }) {
        const movieIndex = movies.findIndex(movie => movie.id == id)
        if (movieIndex == -1) return false

        movies[movieIndex] = {
            ...movies[movieIndex],
            ...input
        }
        return movies[movieIndex]
    }
}