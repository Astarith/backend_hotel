const {DataTypes} = require('sequelize');
const db = require('../config/database');

const Room = db.define('room', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    jenis: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    harga: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    Image: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    freezeTableName: true
});

module.exports = Room;
