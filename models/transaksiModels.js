const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Transaksi = db.define('transaksi', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    namaPelanggan: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    itemPerkg: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    pricePerkg: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    totalHarga: {
        type: DataTypes.STRING(255),

    }
}, {
    freezeTableName: true
});

module.exports = Transaksi;