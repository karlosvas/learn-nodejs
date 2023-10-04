const z = require('zod')

const mopvieSchema = z.object({
    title: z.string({
        required_errror: 'Movie title required',
        invalid_type_error: 'Movie title mus be a string'
    }),
    year: z.number().int().positive().min(1900).max(2023),
    director: z.string(),
    duration: z.number().int().positive(),
    rate: z.number().positive().max(10).default(0),
    poster: z.string().url({
        message: 'Poster must be a valid URL'
    }),
    genre: z.array(
        z.enum(['Action', 'Aventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-fi', 'Wéstern']),
        {
            required_error: 'Movie genre is required',
            invalid_type_error: 'Movie genre must be an array of enum Genre'
        }
    )
})

function validateMovie(objet) {
    return mopvieSchema.safeParse(objet)
}

function validatePartialMovie(object) {
    return mopvieSchema.partial().safeParse(object)
}

module.exports = { validateMovie, validatePartialMovie }