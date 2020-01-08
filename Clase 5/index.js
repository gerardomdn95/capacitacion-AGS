const express = require('express')

const app = express();
const port = 3000;
const HTML =`${__dirname}/views/index.html`

// Endpoints
app.get('/', (request, response) => {
    // Send File para archivos
    response.status(200).sendFile(HTML);
});

app.get('/pikachu', (request, response) => {
    const pokemon = {
        name: 'pikachu',
        id: 25
    }
    // Seend para cualquier tipo de variable
    response.status(200).send(pokemon);
});

// Siempre va a ser la última línea del server
app.listen(port, () => {
    console.log('Servidor corriendo en el puerto ' + port);
});
