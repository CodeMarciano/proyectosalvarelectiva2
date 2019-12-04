var db = require('../config/database');
var sequelize = require('sequelize');

function get(request, response){

    db.query('SELECT * FROM cargo;', {
        type: sequelize.QueryTypes.SELECT
    })
        .then(cargo => {
            response.json(cargo);
        });

    // db.query('UPDATE cargo SET nombre=:nombre where idCargo=:idCargo;',{ 
    //     replacements: { nombre: "Joselin", idCargo: 1 }, type: sequelize.QueryTypes.UPDATE
    // })
    //     .then();

    //     db.query('UPDATE cargo SET nombre=:nombre where idCargo=:idCargo;', {
    //         replacements: { 
    //             nombre: request.body.nombre,
    //             idCargo: 1
    //         }, type: sequelize.QueryTypes.UPDATE
    //    })
    //     .then(data => {
    //             response.status(404).send({ message: 'Actualizado'});            
    //      })
    //     .catch(err => {
                    
    //             response.status(404).send({ message: '  Servidor Con problemas'});            
    //     });


    // db.query('UPDATE cargo SET nombre=:nombre where idCargo=:idCargo;',{ 
    //     replacements: { nombre: "Joselin", idCargo: 1 }, type: sequelize.QueryTypes.UPDATE
    // }).then(cargo => {
    //     response.json(cargo);
    // })
    
    // db.query('SELECT * FROM cargo WHERE idCargo = :idCargo ',{ 
    //     replacements: { idCargo: 1 }, type: sequelize.QueryTypes.SELECT 
    // }).then(cargo => {
    //     response.json(cargo);
    // })
    

//     db.query("SELECT * FROM cargo;", {
//         type: sequelize.QueryTypes.SELECT
//    })
//    .then(cargo => {
//        response.json(cargo)
//     });

}

function cantidadEmpleadoPorCargo(request, response){
    db.query(`SELECT c.nombre as cargo, COUNT(e.idEmpleado) as cantidaEmpleado
              FROM cargo c JOIN empleado e on c.idCargo = e.idCargo
              GROUP BY c.nombre;`,{
                  type: sequelize.QueryTypes.SELECT
              })
                .then(cantidadEmpleadoPorCargo => {
                    response.json(cantidadEmpleadoPorCargo);
                });

}

module.exports = {get, cantidadEmpleadoPorCargo};