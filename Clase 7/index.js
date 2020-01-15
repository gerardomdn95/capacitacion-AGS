// 1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
//                     https://pokeapi.co/

//Instalar la dependencia request
const request = require('request');

//Ahora vamos a solicitar la api
//con un método GET
//La dirección es:
//https://pokeapi.co/api/v2/pokemon//
//después de pokemon accedemos al
// nombre
request('https://pokeapi.co/api/v2/pokemon/pikachu/', function(error, response, body){
    //recibimos 2 parámetros, la dirección y function (con sus 3 parámetros)
    //error... para cuando la petición no se concreta
    //response... es como todo el papeleo e identificaciones de la api
    //body... aquí la información "útil" o específica que buscamos
    //todo esto es un json
    //console.log(error);
    //console.log(response);
    //console.log(response.statusCode);
    //console.log(body);
    if(response.statusCode === 200) {
        const pokemon = JSON.parse(body); //si 'ok', entonces pasa el body a pokemon
        console.log('Pokemon encontrado!');
        console.log('pokemon.name');
        console.log(pokemon.abilities[0].ability.name);

    } else {
        console.log('El Pokemon que usted marcó, no existe')
    }
});
