var express = require('express');
var cargoControlador = require('../controllers/cargo-controller');
var api = express();

api.get('/get', cargoControlador.get);
api.get('/get/cantidadempleadoporcargo', cargoControlador.cantidadEmpleadoPorCargo);
// api.post('/save', cargoControlador.save);
// api.get('/update', cargoControlador.update);
// api.get('/delete', cargoControlador.destroy);

module.exports = api;