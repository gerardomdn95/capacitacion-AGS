// Escribe el código que permita hacer las operaciones elementales 
// CRUD de la siguiente API genérica:
//      https://goodreads-devf-aaron.herokuapp.com/docs/ 

// Recuerda probar con Postman o con Insomnia cómo hay que hacer las peticiones a la API     para ver qué y cómo responde el servidor.

// 1.- Escribe una función que reciba como parámetros nombre,
//     nacionalidad, biografía, género y edad para hacer una
//     petición a la API para crear un autor nuevo. 
//     La función debe retornar el autor nuevo en una promesa.

const express = require('express')

const app = express();
const port = 3000;
const HTML =`${__dirname}/views/index.html`;

app.get


// // Endpoints
// app.get('/', (request, response) => {
//     // Send File para archivos
//     response.status(200).sendFile(HTML);
// });

// app.get('/pikachu', (request, response) => {
//     const pokemon = {
//         name: 'pikachu',
//         id: 25
//     }
//     // Seend para cualquier tipo de variable
//     response.status(200).send(pokemon);
// });

// // Siempre va a ser la última línea del server
// app.listen(port, () => {
//     console.log('Servidor corriendo en el puerto ' + port);
// });
