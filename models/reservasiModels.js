const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Reservasi = db.define('reservasi', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    checkin: {
        type: DataTypes.DATE,
        allowNull: false
    },
    checkout: {
        type: DataTypes.DATE,
        allowNull: false
    },
    guestName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    adult: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    children: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    remarks: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    paymentMethod: {
        type: DataTypes.ENUM('transfer', 'cash'),
        allowNull: false
    }   

}, {
    freezeTableName: true
});

module.exports = Reservasi;