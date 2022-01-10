const express = require('express');

const hbs = require('hbs');
require('./hbs/healpers');

const app = express()
    //const hbs = require('hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');
//Registro de helper


app.get('/', (req, res) => {
    res.render('home', {
        titulo: "home",
        nombre: "jUan",

    });
});
/*
app.get('/', function(req, res) {
    //res.send('Hola mundo desde express');
    let salida = {
        nombre: 'Juan',
        edad: '23',
        url: req.url
    }
    res.send(salida);
})
app.get('/data', (req, res) => {
    res.send('data data data');
});*/
app.listen(8000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});