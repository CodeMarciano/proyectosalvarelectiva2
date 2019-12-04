var sequelize = require('sequelize');
var db = require('../config/database');

function get(request, response){

    db.query("SELECT * FROM empleado;", {
         type: sequelize.QueryTypes.SELECT
    })
        .then(empleado => {
            response.json(empleado)
        });
}

module.exports = {get}