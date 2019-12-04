var express = require('express');
var horarioControlador = require('../controllers/horario-controller');
var api = express();

api.get('/get', horarioControlador.get);
api.get('/get/horariocargo/:id', horarioControlador.getHorarioIdCargo);
// api.post('/save', cargoControlador.save);
// api.get('/update', cargoControlador.update);
// api.get('/delete', cargoControlador.destroy);

module.exports = api;