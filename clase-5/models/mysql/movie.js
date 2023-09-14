import mysql from 'mysql2/promise'

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'moviesdb'
}

const connection = await mysql.createConnection(config)



export class MovieModel {
    static async getAll({ genre }) {
        if (genre) {
            const loweCaseGenre = genre.toLowerCase()
            const [genres] = await connection.query(
                'SELECT id, name FROM genre WHERE LOWER(name) = ?;', [loweCaseGenre]
            )
            // No genere found
            if (genres.length === 0) return []
            // Get the id forom the fistbgame
            const [{ id }] = genres
            // Get all movies ids from database table, la query a movie_generes, join y devolber los rersultados.
            return []
        }
        const [movies] = await connection.query(
            "SELECT BIN_TO_UUID(id) id, title, year, director, duration, poster, rate FROM movie;"
        )
        return movies
    }

    static async getById({ id }) {
        const [movies] = await connection.query(
            "SELECT BIN_TO_UUID(id) id, title, year, director, duration, poster, rate FROM movie WHERE id = UUID_TO_BIN(?);",
            [id]
        )
        if (movies.length == 0) return null
        return movies[0]
    }

    static async create({ input }) {
        const {
            genre: genreInput,
            title,
            year,
            duration,
            director,
            poster,
            rate
        } = input
        const [uuidResult] = await connection.query("SELECT UUID() uuid;")
        const [{ uuid }] = uuidResult

        await connection.query(
            `INSERT INTO movie (id, title, year, director, duration, poster, rate)
                VALUES (UUID_TO_BIN("${uuid}"), ?, ?, ?, ?, ?);`,
            [title, year, director, duration, poster, rate]
        )

        const [movies] = await connection.query(
            `SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id FROM movie WHERE id = UUID_TO_BIN(?);`,
            [uuid]
        )
        return movies[0]
    }
}


// static async delate({ id }) {
// =>  EJERCICIO CREAR DELATE
// }

// static async update({ id, input }) {
// => EJERCICIO CREAR UPDATE
// }