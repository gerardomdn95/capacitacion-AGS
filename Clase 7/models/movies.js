const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId; // String aleatorio (Hash)

const movieSchema = new Schema({
    movieId: ObjectId,
    title: String,
    year: Number,
    description: {
        type: String,
        require: true
    },
    image: String,
    theme: {
        type: String,
        enum: ['Drama', 'Infantil', 'Acción', 'Comedia']
    },
    director: {
        type: String,
        default: 'Gerardo Medina'
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = { Movie };
