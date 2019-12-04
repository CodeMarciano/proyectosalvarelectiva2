var Sequelize = require('sequelize')
var db = require('../config/database')

var Cargo = db.define('cargo',{
    idCargo: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    esFlexible: {
        type: Sequelize.TINYINT
    }
},
{
    freezeTableName: true,
    timestamps: false
});

module.exports = Cargo;