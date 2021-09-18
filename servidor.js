const { response } = require('express');
const express = require('express');

const app = express();

app.use(express.static('/public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/home');
});

app.listen(8080);

console.log('Servidor está rodando!');
