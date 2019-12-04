var Sequilize = require('sequelize');
var db = require('../config/database');

var Empleado = db.define('empleado', {

    idEmpleado: {
        type: Sequilize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true
    },
    idCargo: {
        type: Sequilize.INTEGER,
        allowNull: true,
    },
    idTurnoEmpleado: {
        type: Sequilize.INTEGER,
        allowNull: false
    },
    ciEmpleado: {
        type: Sequilize.STRING,
        allowNull: true
    },
    primerNombre: {
        type: Sequilize.STRING,
        allowNull: false
    },
    segundoNombre: {
        type: Sequilize.STRING,
        allowNull: true
    },
    apellidoPaterno:{
        type: Sequilize.STRING,
        allowNull: false
    },
    apellidoMaterno:{
        type: Sequilize.STRING,
        allowNull: true
    },
    fechaNacimiento:{
      type: Sequilize.DATE,
      allowNull: true  
    },
    genero:{
        type: Sequilize.ENUM('M', 'F'),
        allowNull: true
    },
    idRFID: {
        type: Sequilize.STRING,
        allowNull: false
    },
    usuario: {
        type: Sequilize.STRING,
        allowNull: false
    },
    contrasenia: {
        type: Sequilize.STRING,
        allowNull: false
    },
    activo: {
        type: Sequilize.BOOLEAN,
        allowNull: false
    }

},
{
    freezeTableName: true,
    timestamps: false
});

module.exports = Empleado;

//     idTurnoEmpleado INT,
//     ciEmpleado VARCHAR(40) UNIQUE NOT NULL,
//     primerNombre VARCHAR(50) NOT NULL,
//     segundoNombre VARCHAR(50),
//     apellidoPaterno VARCHAR(50) NOT NULL,
//     apellidoMaterno VARCHAR(50),
//     fechaNacimiento DATE NOT NULL,
//     genero ENUM('M', 'F') NOT NULL,
//     idRIFD VARCHAR(50),
//     usuario VARCHAR(50),
//     contrasenia VARCHAR(86),