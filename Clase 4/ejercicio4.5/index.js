// 5.- Hacer una petición a la swapi a un personaje y obtener 
//     sus películas.
//                     https://swapi.co

const request = require('request');
request('https://swapi.co/api/people/1/', function(error, response, body){
    if(response.statusCode === 200){
        const force = JSON.parse(body);
        //console.log(force.films);
        const requestFilm = require('requestFilm');
       
    } else {
        console.log('La fuerza no lo acompaña');
    }
});