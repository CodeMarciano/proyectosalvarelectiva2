var db = require('../config/database');
var sequelize = require('sequelize');

// var Turno = require('../models/turno');

function get(request, response){
    
    db.query(`SELECT c.nombre as cargo, t.nombre as turno, h.horaInicio, h.horaFin
              FROM cargo c JOIN horario h on c.idCargo = h.idCargo
              JOIN turno t on h.idTurno = t.idTurno
              ORDER BY c.nombre, t.nombre;
    `, {
        type: sequelize.QueryTypes.SELECT
    })
        .then(horario =>{
            response.json(horario);
        });
}



module.exports = {get};