const {DataTypes} = require('sequelize');
const db = require('../config/database');
const Transaksi = require('./transaksiModels');

const fnb = db.define('history_fnb', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    paymentStatus: {
        type: DataTypes.ENUM('overdue', 'paid'),
        allowNull: true
    },
    amount: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    freezeTableName: true
});

module.exports = HistoryFnB;