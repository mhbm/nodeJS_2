require("marko/node-require").install(); // Allow Node.js to require and load `.marko` files

const markoExpress = require('marko/express');

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use('/estatico', express.static('src/app/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(methodOverride(function(req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));


const rotas = require('../app/rotas/rotas');

rotas(app);

app.use((request, response, next) => {
    return response.status(404).marko(
        require('../app/views/base/erros/404.marko')
    );
});

app.use((error, request, response, next) => {
    return response.status(500).marko(
        require('../app/views/base/erros/500.marko')
    );
});

module.exports = app;