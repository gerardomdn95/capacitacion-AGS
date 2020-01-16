// 5.- Hacer una petición a la swapi a un personaje y obtener 
//     sus películas.
//                     https://swapi.co

const request = require('request');
let swapi = 'https://swapi.co/api/';
let people1 = 'people/1/';
request(swapi + people1, function(error, response, body){
    if(response.statusCode === 200){
        const force = JSON.parse(body);
        console.log(force.films);
        // const pelis = force.films;
        // const peliss = JSON.parse(pelis.body) ;
        // console.log(peliss);
    } else {
        console.log('La fuerza no lo acompaña');
    }
});