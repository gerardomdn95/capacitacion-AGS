// 6.- Devolver los asteroides que sean potencialmente peligrosos
//     para la tierra de la semana pasada hasta el día de ayer.
//                     https://api.nasa.gov/
const request = require('request');
const start_date = '2020-01-08';
const end_date = '2020-01-14';
//let fechaHoy = new Date(); //2020-01-15
// console.log(fechaHoy);
// let fecha2 = fechaHoy.getDay();
// console.log(fecha2);
             //https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-01-08&end_date=2020-01-14&api_key=DEMO_KEY
const uri = 'https://api.nasa.gov/neo/rest/v1/feed?start_date='+start_date+'&end_date='+end_date+'&api_key=DEMO_KEY';
request(uri, function(error, response, body){
    if(response.statusCode === 200){
        const armagedon = JSON.parse(body);
        //for(let i=0;i<armagedon.length;i++){}
        let d = '2020-01-10';
        console.log(armagedon.near_earth_objects.d);
    }
});// Tengo problemas con esta parte

//Y si uso callbacks?
// const peticion = (link) => {
//     const request = require('request');
//     request(link, function(error, response, body){
//         if(response.statusCode === 200){
//             const objeto = JSON.parse(body);
//             return
//         } else {
//             console.log('Elemento no encontrado');
//         }
//     })
// }