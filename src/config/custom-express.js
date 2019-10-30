require("marko/node-require").install(); // Allow Node.js to require and load `.marko` files

const markoExpress = require('marko/express');

const express = require("express");
const app = express();

const rotas = require('../app/rotas/rotas');

rotas(app);

module.exports = app;