const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Harga = db.define('harga', {
  id: {
    type: DataTypes.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  kategori: {
    type: DataTypes.ENUM('sepatu', 'selimut', 'bed_cover', 'pakaian'),
    multiple: true,
    allowNull: false
  },
  harga: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  freezeTableName: true
});

module.exports = Harga;

