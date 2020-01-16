const express = require('express');
const router = express.Router();

const { Movie } = require('../models/movies');

router.get('/', (req, res) => {
    res.status(200).send('Servidor arriba');
});

// Create
// Ruta
router.post('/api/createMovie', (req, res) => {
    const { title, year, description, image, theme, director } = req.body;
    const newMovie = Movie({
        title,
        year,
        description,
        image,
        theme,
        director
    });
    newMovie.save((err, pelicula) => {
        err ? res.status(409).send(err) : res.status(201).send(pelicula);
    });
});

// Read
router.get('/api/getAllMovies', (req, res) => {
    Movie.find()
        .then((peliculas) => res.status(200).send(peliculas))
        .catch((err) => res.status(404).send(err));
});

// PARAMS => OBLIGATORIOS!
///api/getMovieById/bfchskabcbvuckur
router.get('/api/getMovieById/:id', (req, res) => {
    const { id } = req.params;
    Movie.findById(id)
        .then((pelicula) => res.status(200).send(pelicula))
        .catch((err) => res.status(404).send(err));
});

// Query Parameters => opcionales
router.get('/api/getMovieByName', (req, res) => {
    const { title } = req.query;
    Movie.find({ title })
        .then((peliculas) => {
            peliculas.length > 0
                ? res.status(200).send(peliculas)
                : res.status(404).send('Película no encontrada');
        })
        .catch((err) => res.send(404).send(err));
});

module.exports = { router };
