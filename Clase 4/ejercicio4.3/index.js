// 3.- Hacer una petición por autor y devolver la lista de 
//     sus libros
//         http://openlibrary.org/search.json?author=asimov

const request = require('request');
request('http://openlibrary.org/search.json?author=asimov', function(error, response, body){
    if(response.statusCode === 200) {
        const asimov = JSON.parse(body); //si 'ok', entonces pasa el body el json del libro
        console.log('Libros del autor:');
        for(let i=0;i<asimov.docs.length;i++){
            console.log(asimov.docs[i].title);//Este es para la novela de ciencia ficción
        }
        /*asimov.forEach(element => {
            console.log(element);
        });*/
        //Tengo duda de cómo hacerlo con el forEach
    } else {
        console.log('El libro no existe')
    }
});