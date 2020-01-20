// 6.- Devolver los asteroides que sean potencialmente peligrosos
//     para la tierra de la semana pasada hasta el día de ayer.
//                     https://api.nasa.gov/
const request = require('request');
const start_date = '2020-01-11';
const end_date = '2020-01-18';
const fechas = [start_date,'2020-01-12','2020-01-12','2020-01-14','2020-01-15','2020-01-16','2020-01-17','2020-01-18',end_date]
//let fechaHoy = new Date(); //2020-01-15
// console.log(fechaHoy);
// let fecha2 = fechaHoy.getDay();
// console.log(fecha2);
             //https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-01-11&end_date=2020-01-18&api_key=DEMO_KEY
const uri = 'https://api.nasa.gov/neo/rest/v1/feed?start_date='+start_date+'&end_date='+end_date+'&api_key=DEMO_KEY';
request.get(uri,(error, response, body)=>{
    if(response.statusCode === 200){
        const armagedon = JSON.parse(body);
        for(let i=0;i<fechas.length;i++){
            console.log(`Asteroides de la fecha: ${[fechas[i]]}`)
            for(let j=0;j<armagedon.near_earth_objects[fechas[i]].length;j++){
                armagedon.near_earth_objects[fechas[i]][j].is_potentially_hazardous_asteroid === true
                    ? console.log(`El asteroide id = ${armagedon.near_earth_objects[fechas[i]][j].id}, es peligroso`) //si sí
                    : console.log(`El asteroide id = ${armagedon.near_earth_objects[fechas[i]][j].id}, no es peligroso`) //si no (else)
            }
        }
    }
});
// request(uri, function(error, response, body){
//     if(response.statusCode === 200){
//         const armagedon = JSON.parse(body);
//         for(let i=0;i<fechas.length;i++){
//             console.log(`Asteroides de la fecha: ${[fechas[i]]}`)
//             for(let j=0;j<armagedon.near_earth_objects[fechas[i]].length;j++){
//                 armagedon.near_earth_objects[fechas[i]][j].is_potentially_hazardous_asteroid === true
//                     ? console.log(`El asteroide id = ${armagedon.near_earth_objects[fechas[i]][j].id}, es peligroso`) //si sí
//                     : console.log(`El asteroide id = ${armagedon.near_earth_objects[fechas[i]][j].id}, no es peligroso`) //si no (else)
//             }
//         }
//     }
// });