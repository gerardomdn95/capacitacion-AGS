const express = require('express');
const router = express.Router();

const { Movies } = require('../models/movies')

router.get('/', (req, res) => {
    res.status(200).send('Servidor arriba');
});

router.post('/api/createMovie', (req, res) => {
    const { title, year, description, image, theme, director } = req.body;
    const newMovie = Movie();
    console.log(req.body);
    res.status(200).send('Método POST');
});
newMovie.save((err, pelicula) => {
    err ? res.status(409).send(err) : res.status(201).send(pelicula);
});

// Read
//Que un endpoint
router.get('/api/getAllMovies', (req, res) => {
    Movie.find()
    .then((peliculas) => res.status(200).send(peliculas))
    .catch((err) => res.status(404).send(err))
})

//api/
reouter.get('/api/getMovieById/:id', (req, res) => {
    const {id} = req.params;
    console.log(id);
    Movie.findById(id)
    .then((película) => res.status(200).send(pelicula)) //si se cumple
    .catch((err) => res.status(404).send(err));
});

router.get()

module.exports = { router };
