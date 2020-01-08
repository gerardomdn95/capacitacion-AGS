const request = require('request');

// const n = 53;
// const promesa = new Promise((resolve, reject) => {
//     if (n % 2 === 0) {
//         resolve('El número es par');
//     } else {
//         reject('El núemro es impar');
//     }
// });

// promesa
//     .then((success) => console.log(success))
//     .catch((error) => console.log(error));

const getPokemon = (nombre) => {
    return new Promise((resolve, reject) => {
        request(`https://pokeapi.co/api/v2/pokemon/${nombre}`, (error, response, body) => {
            if (response.statusCode === 200) {
                const pokemon = JSON.parse(body);
                resolve(pokemon);
            } else {
                reject('Error Status ' + response.statusCode);
            }
        });
    });
}

// then es cuando la promesa se cumple
// catch cuando no se cumple
getPokemon('pikachu')
    .then((pokemon) => console.log(pokemon))
    .catch((error) => console.log(error));