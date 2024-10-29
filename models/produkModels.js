// models/produkModels.js
const { DataTypes } = require('sequelize'); 
const db = require('../config/database');

const Produk = db.define('produk', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    category: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    sku: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    stock_quantity: {
        type: DataTypes.INTEGER, // Menggunakan INTEGER untuk kuantitas
        allowNull: false
    },
    regular_price: {
        type: DataTypes.DECIMAL(10, 2), // Menggunakan DECIMAL untuk harga
        allowNull: false
    },
    sale_price: {
        type: DataTypes.DECIMAL(10, 2), // Menggunakan DECIMAL untuk harga
        allowNull: false
    }
}, {
    freezeTableName: true
});

module.exports = Produk;
