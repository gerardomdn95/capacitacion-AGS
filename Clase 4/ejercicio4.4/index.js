// 4.- Hacer una petición y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse

const request = require('request');
request('http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse', function(error, response, body){
    if(response.statusCode === 200) {
        const banda = JSON.parse(body); //si 'ok', entonces pasa el body el json de la banda
        console.log('Nombre de la banda: ' + banda.artists[0].strArtist);
        console.log('Género de la banda: ' + banda.artists[0].strStyle);
    } else {
        console.log('La banda no existe');
    }
});