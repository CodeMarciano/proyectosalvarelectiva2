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

function create(request, response){
    db.query(`INSERT empleado(idCargo, ciEmpleado, primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, genero, idRFID)
              VALUES (:idCargo, :ciEmpleado, :primerNombre, :segundoNombre, :apellidoPaterno, :apellidoMaterno, :fechaNacimiento, :genero, :idRFID);`,{                 
                  type: sequelize.QueryTypes.INSERT,
                  replacements: {
                      idCargo: request.body.idCargo,
                      ciEmpleado: request.body.ciEmpleado,
                      primerNombre: request.body.primerNombre,
                      segundoNombre: request.body.segundoNombre,
                      apellidoPaterno: request.body.apellidoPaterno,
                      apellidoMaterno: request.body.apellidoMaterno,
                      fechaNacimiento: request.body.fechaNacimiento,
                      genero: request.body.genero,
                      idRFID: request.body.idRFID
                  }
    })
        .then( (data) => {
            if (data) {
                response.status(200).send({ message: 'se registro'});
            } else {
                response.status(400).send({ message: 'no se registro'});
            }
        })

}

function destroy(request, response){
    db.query(`DELETE FROM empleado WHERE idEmpleado = :idEmpleado;`, {
        type: sequelize.QueryTypes.DELETE,
        replacements: { idEmpleado: request.params.id }
    })
        .then(data => {
            return response.status(404).json({ message: "Eliminado" })
        })
        .catch(err => {
            return response.status(404).json({ message: "No ha sido eliminado" })
        })
}

function update(request, response){
    // console.log(request.params.id);
    // console.log(request.body);
    
    
    db.query(`UPDATE empleado
              SET idCargo = :idCargo,
                  ciEmpleado = :ciEmpleado,
                  primerNombre = :primerNombre,
                  segundoNombre = :segundoNombre,
                  apellidoPaterno = :apellidoPaterno,
                  apellidoMaterno = :apellidoMaterno,
                  fechaNacimiento = :fechaNacimiento,
                  genero = :genero,
                  idRFID = :idRFID
              WHERE idEmpleado = :idEmpleado;`,{
                  type: sequelize.QueryTypes.UPDATE,
                  replacements: {
                    idCargo: request.body.idCargo,
                    ciEmpleado: request.body.ciEmpleado,
                    primerNombre: request.body.primerNombre,
                    segundoNombre: request.body.segundoNombre,
                    apellidoPaterno: request.body.apellidoPaterno,
                    apellidoMaterno: request.body.apellidoMaterno,
                    fechaNacimiento: request.body.fechaNacimiento,
                    genero: request.body.genero,
                    idRFID: request.body.idRFID,
                    idEmpleado: request.params.id
                }

              })
                .then( data => {
                    return response.status(404).json({ message: "actualizado" })
                })
                .catch( err => {
                    return response.status(404).json({ message: "Server con problemas" })
                })
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

module.exports = {get, create, update, destroy, cantidadEmpleadoPorGenero}