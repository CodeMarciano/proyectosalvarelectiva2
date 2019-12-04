const Sequelize = require('sequelize');
module.exports = new Sequelize('kantuta_electiva', 'root', 'brian123', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});