const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('../models/userModels');
const Room = require('./roomModels');

const Reservasi = db.define('reservasi', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER(11),
        references : {
            model : User,
            key : 'id'
        }
    },
    roomId : {
        type: DataTypes.INTEGER(11),
        references : {
            model : User,
            key : 'id'
        }
    },
    roomNo : {
        type: DataTypes.INTEGER(11),
    },
    guestName: {
        type: DataTypes.STRING(255),
    },
    email: {
        type: DataTypes.STRING(255),
    },
    phone: {
        type: DataTypes.STRING(255),
    },
    adult: {
        type: DataTypes.ENUM('1', '2', '3', '4'),
    },
    children: {
        type: DataTypes.ENUM('0', '1', '2', '3', '4'),
    },
    remarks: {
        type: DataTypes.STRING(255),
    },
    checkin: {
        type: DataTypes.DATEONLY,
    },
    checkout: {
        type: DataTypes.DATEONLY,
    },
    room_status: {
        type: DataTypes.ENUM('available', 'booked'),
    },
    nationality : {
        type: DataTypes.STRING(255),
    }
}, {
    freezeTableName: true,
    timestamps : true
});

// Mengatur asosiasi dengan foreign key
User.hasMany(Reservasi, { foreignKey: 'userId' });
Reservasi.belongsTo(User, { foreignKey: 'userId' });

Room.hasMany(Reservasi, { foreignKey: 'roomId' });
Reservasi.belongsTo(Room, { foreignKey: 'roomId' });

module.exports = Reservasi;
