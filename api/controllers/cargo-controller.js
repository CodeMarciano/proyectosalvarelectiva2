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

module.exports = {get};