var Sequelize = require('sequelize');
var db = require('../config/database');
var Turno = require('./turno');

var Horario = db.define('horario', {
    idHorario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true   
    },
    // idCargo: {
    //     type: Sequelize.INTEGER,
    //     allowNull: true
    // },
    // idTurno: {
    //     type: Sequelize.INTEGER,
    //     allowNull: true
    // },
    // horaInicio: {
    //     type: Sequelize.TIME,
    //     allowNull: true
    // },
    // horaFin: {
    //     type: Sequelize.TIME,
    //     allowNull: true
    // }

},
{
    // freezeTableName, para que tome el nombre de las tablas de m
    // modo SINGULAR
    freezeTableName: true,
    timestamps: false
    
});

// Horario.associate = (models) =>{
//     Horario.belongsTo(models.Turno, {
//         foreignKey: 'idTurno'
//         // targetKey: 'idTurno'
//     });

// }

// Horario.belongsTo(Turno, {
//     // foreignKey: 'idTurno',
//     foreignKey: 'idTurno', 
//     targetKey: 'idTurno'
// });

module.exports = Horario;