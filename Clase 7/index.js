// Servidor
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { mongoURI } = require('./config/const');
const { router } = require('./config/const');

const app = express();
const PORT = 3000;

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Conectando a BD'))
    //.catch(() => console.log('No jala'));
    .catch((err) => console.log)

    app.use(bodyParser.json());
    app.use('/', router);

    app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ' + PORT);
});


    