const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Reservasi = require('./reservasiModels');

const chekOutIn = db.define('checkOutIn', {
    id : {
        type : DataTypes.INTEGER(11),
        autoIncrement : true,
        primaryKey : true
    },
    id_reservasi : {
        type : DataTypes.INTEGER(11),
        references : {
            model : Reservasi,
            key : 'id'
        }
    },
    purposeOfVisit : {
        type : DataTypes.STRING(255),
        allowNull : false
    },
    wakeUpCall : {
        type : DataTypes.DATE,
        allowNull : true
    },
    remarks : {
        type : DataTypes.STRING,
        allowNull : true
    },
    checkin: {
        type: DataTypes.DATEONLY,
    },
    checkout: {
        type: DataTypes.DATEONLY,
    },
    room_status: {
        type: DataTypes.ENUM('checkin', 'checkout'),
    },
    nationality : {
        type: DataTypes.STRING(255),
    },
    paymentMethod : {
        type: DataTypes.ENUM('debit', 'cash'),
    },
    paymentStatus : {
        type : DataTypes.ENUM('done', 'pending'),
    },
    otherCharge : {
        type: DataTypes.STRING(255),
    },
    nominal : {
        type : DataTypes.INTEGER(25)
    },
}, {
    freezeTableName : true,
    timestamps : true
})

Reservasi.hasMany(chekOutIn, { foreignKey: 'id_reservasi' });
chekOutIn.belongsTo(Reservasi, { foreignKey: 'id_reservasi' });

module.exports = chekOutIn;