const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./user/userModels');

const Reservasi = db.define('reservasi', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
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
        type: DataTypes.ENUM('1', '2', '3', '4'),
        allowNull: false
    },
    children: {
        type: DataTypes.ENUM('0', '1', '2', '3', '4'),
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
    },
    price: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    }  
    

}, {
    freezeTableName: true
});
User.hasMany(Reservasi, {FOREIGNKEYS: 'userId'});
Reservasi.belongsTo(User, {FOREIGNKEYS: 'userId'});

module.exports = Reservasi;