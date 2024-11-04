const Sequelize = require('sequelize');


const db = new Sequelize('room', 'root', '', {

//const db = new Sequelize('dbroom', 'root', '', {

    host: 'localhost',
    dialect: 'mysql',
});

module.exports = db;