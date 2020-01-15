// Hacer una funcion que haga una petición 
//     (Ejemplo: peticionLibro(“i robot”);
//     Buscar un libro y traer el o los autores del primer libro
//     http://openlibrary.org/search.json?q=i+robot) 

const request = require('request');

request('http://openlibrary.org/search.json?q=i+robot', function(error, response, body){
    
//console.log(response.statusCode);

    if(response.statusCode === 200) {
        const libro = JSON.parse(body); //si 'ok', entonces pasa el body el json del libro
        console.log('Libro encontrado!');
        console.log('Autor(es): ' + libro.docs[0].author_name); //Este es el primer libro...
        //console.log('Autor: ' + libro.docs[2].author_name[0]);//Este es para la novela de ciencia ficción

    } else {
        console.log('El libro no existe')
    }
});