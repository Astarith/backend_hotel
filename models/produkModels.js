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
        type: DataTypes.STRING(255),
        allowNull: false
    },
    regular_price: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    sale_price: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    freezeTableName: true
});

module.exports = Produk;