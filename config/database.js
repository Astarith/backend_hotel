const Sequelize = require('sequelize');

const db = new Sequelize('cicimoci', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = db;