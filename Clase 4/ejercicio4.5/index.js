// 5.- Hacer una petición a la swapi a un personaje y obtener 
//     sus películas.
//                     https://swapi.co

const request = require('request');
let swapi = 'https://swapi.co/api/';
let people1 = 'people/1/';
request.get(swapi+people1,(error,response,body)=>{
    if(response.statusCode === 200){
        const force = JSON.parse(body);
        console.log(`Personificación de la fuerza (personaje): ${force.name}`);
        for(let i=0;i<4;i++){
            //request(force.films[i], function(error,response,body){
            request.get(force.films[i],(error,response,body)=>{
                const movies = JSON.parse(body);
                console.log(`Pelicula: ${movies.title}`);
            });
        }
    } else {
        console.log('La fuerza no lo acompaña');
    }
});
// request(swapi+people1, function(error,response,body){
//     if(response.statusCode === 200){
//         const force = JSON.parse(body);
//         console.log("Personificación de la fuerza (personaje): " + force.name);
//         for(let i=0;i<4;i++){
//             request(force.films[i], function(error,response,body){
//                 const movies = JSON.parse(body);
//                 console.log('Pelicula: '+movies.title);
//             });
//         }
//     } else {
//         console.log('La fuerza no lo acompaña');
//     }
// });