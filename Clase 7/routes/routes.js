const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('Servidor arriba');
});

router.post('/post', (req, res) => {
    console.log(req.body);
    res.status(200).send('Método POST');
});

module.exports = { router };
