//Instalar dependencia
const mongoose = require('mongoose'); //Nos permite comunicarnos con Mongo Data base
//En console tendríamos que escribir
const Schema = mongoose.Schema; //Es una clase que viene de mongoose
//Para el id que es un Hash
const ObjectId = mongoose.Schema.ObjectId; //Genera un string aleatorio (Hash)

const movieSchema = new Schema({ //Creamos una nueva instancia
    movieId: ObjectId,
    title: String,
    year: Number,
    // description: {
    //     type: String,
    //     require: true
    // }
    image: String, 
    theme: { //propiedad enum, para enumerer sólo ciertos valores
        type: String, //Primero el tipo de dato
        enum: ['Drama', 'Infantil', 'Accion','Comedia']
    },
    director: {
        type: String,
        default: 'No registrado'//Si no le ponen, ponle este
    }
});

//Para prepararlo para exportarlo utilizamos model
//así lo preparamos para su uso

const Movie = mongoose.model('Movie', movieSchema);

module.exports = { Movie };
