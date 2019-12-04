var Turno = require('../models/turno');
// var bcrypt = require('bcrypt-nodejs');

function get(request, response){
    Turno.findAll().then(valor => {
        response.json(valor)
    });
}

function save(request, response){
    Turno.create({
        nombre: request.body.nombre
    }).then(function(data) {
        if (data) {
            response.status(200).send({ message: 'Se registro'});
        } else {
            response.status(400).send({ message: 'No se registro'});
        }
    });
}

function update(request, response){
    // console.log('Funsionando');
    response.status(200).send("OK");
}

function destroy(request, response){
    // console.log('Funsionando');
    response.status(200).send("OK");
}

module.exports = {get, save, update, destroy};