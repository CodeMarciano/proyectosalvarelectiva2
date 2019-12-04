var express = require('express');
var turnoControlador = require('../controllers/turno-controller');
var api = express();

api.get('/get', turnoControlador.get);
api.post('/save', turnoControlador.save);
api.get('/update', turnoControlador.update);
api.get('/delete', turnoControlador.destroy);

module.exports = api;