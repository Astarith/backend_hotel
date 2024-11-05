const { DataTypes } = require('sequelize');
const db = require('../config/database');

const user = db.define('user', {
    username: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'user', 'kasir','superadmin',),
        allowNull: false
    }
}, {
    freezeTableName: true
});

module.exports = user;