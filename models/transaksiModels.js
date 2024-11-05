const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Harga = require('./hargaModels'); 


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
  jenislayanan: {
    type: DataTypes.ENUM('dry clean', 'wash and iron', 'daily laundry'),
    multiple: true,
    allowNull: false
  },
  jenislaundry: {
    type: DataTypes.ENUM('kiloan','satuan'),
    allowNull: false
  },
  jumlah: {
    type: DataTypes.INTEGER(255),
    allowNull: false
  },
  totalHarga: {
    type: DataTypes.INTEGER(255)
  },
  hargaId: {
    type: DataTypes.INTEGER(11),
    references: {
      model: Harga,
      key: 'id'
    },
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('menunggu', 'selesai', 'dibatalkan'),
    allowNull: false,
    defaultValue: 'menunggu',
  },
}, {
  freezeTableName: true,
  hooks: {
    beforeCreate: async (transaksi, options) => {
      const harga = await Harga.findByPk(transaksi.hargaId);
      if (!harga) {
        throw new Error('Harga dengan ID yang diberikan tidak ditemukan');
      }
      transaksi.totalHarga = harga.harga * transaksi.jumlah;
    }
  }
});
  
Harga.hasMany(Transaksi, { foreignKey: 'hargaId' });
Transaksi.belongsTo(Harga, { foreignKey: 'hargaId', as: 'harga' });

module.exports = Transaksi;