const express = require('express');
const servidor = express();
const hbs = require('hbs');

const port = process.env.PORT || 8080;

servidor.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
servidor.set('view engine', 'hbs');

servidor.get('data', (req, res) => {
    res.send('Hola Data');
})

servidor.get('/', (req, res) => {
    res.render('home.hbs');
})

servidor.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`);
});