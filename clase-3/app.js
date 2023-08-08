const express = require('express')
const movies = require('./movies.json')
const crypto = require('node:crypto')
const app = express()

app.disable('x-powered-by')
app.use(express.json())
app.get('/', (req, res)=>{
    res.json({message: 'hola mundo' })
})

app.get('/movies', (req, res)=>{
    const { genre } = req.query
    if (genre) {
        const filterMovies  = movies.filter(
        movie => movie.genre.some(g => g.toLowerCase()== genre.toLowerCase()))
        return res.json(filterMovies)
    }
    res.json(movies)
})

app.get('/movies/:id', (req, res)=>{
    const { id } = req.params
    const movie = movies.find(movie => movie.id == id)
    if (movie) return res.json(movie)
    res.status(404).json({ message : 'Movie not found '})
})

app.post('/movies', (req,res) =>{
    const {
        title,
        genre,
        year,
        director,
        duration,
        rate,
        poster,
    } = req.body

    const newMovie = {
        id: crypto.randomUUID(),
        title,
        genre,
        director,
        year,
        duration,
        rate: rate ?? 0,
        poster,
    }
    movies.push(newMovie),
    res.status(201).json(newMovie)
})

const PORT = process.envPORT ?? 1234
app.listen(PORT, "localhost", () => {
    console.log(`server loading on port http://localhost:${PORT}`)
})