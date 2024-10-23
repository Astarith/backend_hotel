const Sequelize = require('sequelize');

const db = new Sequelize('db_hotel', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = db;