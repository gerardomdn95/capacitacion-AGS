// Servidor
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { mongoURI } = require('./config/const');
const { router } = require('./routes/routes');

const app = express();
const PORT = 3000;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Conectado a la BD 🥳'))
    .catch(() => console.log('Imposible conectarse a la BD ❌'));

// Body obtener JSON
app.use(bodyParser.json());
app.use('/', router);

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ' + PORT);
});
