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

function cantidadEmpleadoPorGenero(request, response){
    db.query(`SELECT genero, count(*) as cantidadPersona
            FROM empleado
            GROUP BY genero;
    `,{
        type: sequelize.QueryTypes.SELECT
    })
        .then(empleadoPorGenero => {

            response.json(empleadoPorGenero);
        });

}

module.exports = {get, cantidadEmpleadoPorGenero}