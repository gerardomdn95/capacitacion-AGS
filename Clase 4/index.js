// Instalar dependencia request
const request = require('request');

// Endpoint
// GET
request('https://pokeapi.co/api/v2/pokemon/pikachu/', function(error, response, body) {
    // console.log(error);
    // console.log(response.statusCode);
    // console.log(body);
    if(response.statusCode === 200) {
        const pokemon = JSON.parse(body);
        console.log('Pokemon encontrado');
        console.log(pokemon.name);
        console.log(pokemon.id);
        console.log(pokemon.abilities[0].ability.name);

    } else {
        console.log('Pokemon no encontrado');
    }
});