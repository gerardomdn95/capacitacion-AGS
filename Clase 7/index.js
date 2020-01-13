// Servidor
const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./routes/routes');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/', router);

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ' + PORT);
});
