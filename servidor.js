// const { response } = require('express');
// const express = require('express');
// const bodyParser = require('body-parser');
// const router = express.Router();

// const app = express();

// app.use(express.static(__dirname + '/public'));

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get('/', function (req, res) {
//     res.render('pages/home');
// });

// app.post('/recebe-dados', function (req, res) {
//     console.log('requisição', req.body);
//     res.send('Dados enviados!');
// });

// app.listen(8080);

// console.log('Servidor está rodando!');

const { response } = require('express');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/home');
});

app.post('/recebe-dados', function (req, res) {
    console.log('requisição', req.body);
    res.send('Dados enviados!');
});

app.listen(8080);

console.log('Servidor está rodando!');
