var express = require('express');
var empleadoControlador = require('../controllers/empleado-controller');
var api = express();

api.get('/get', empleadoControlador.get);
api.get('/get/cantidadgenero', empleadoControlador.cantidadEmpleadoPorGenero);
// api.post('/save', cargoControlador.save);
// api.get('/update', cargoControlador.update);
// api.get('/delete', cargoControlador.destroy);

module.exports = api;