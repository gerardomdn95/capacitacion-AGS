// 7.- Traer los primeros 151 pokemon de la primera generacion y 
//     devolver un objeto con el nombre, sus moves, tipos, tamaño 
//     y peso.
//                       https://pokeapi.co/
const request = require('request');
request('https://pokeapi.co/api/v2/pokemon/?offset=00&limit=151', function(error, response, body) {
    if(response.statusCode === 200) {
        const pokemon = JSON.parse(body);
        for(let i=0;i<150;i++){
             request.get(pokemon.results[i].url,(error,response,body)=>{
                const datos = JSON.parse(body);
                console.log(`Pokemon: ${datos.species.name}`);
                const listmoves = [];
                const listtipos = [];
                //Movimientos
                for(let j=0;j<datos.moves.length;j++){
                    listmoves.push(datos.moves[j].move.name)
                }
                console.log("Movimientos: ")
                console.log(listmoves);
                for(let j=0;j<datos.types.length;j++){
                    listtipos.push(datos.types[j].type.name)
                }
                console.log("Tipos: ")
                console.log(listtipos);
                console.log("Altura: "+datos.height)
                console.log("Peso: "+datos.weight)
            });
        }
    } else {
        console.log('Pokemon no encontrado');
    }
});