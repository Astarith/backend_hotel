const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Harga = require('./hargaModels'); // tambahkan ini


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
    type: DataTypes.ENUM('kiloan', 'satuan'),
    allowNull: false
  },
  jumlah: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  hargaId: {
    type: DataTypes.INTEGER(11),
    references: {
      model: Harga,
      key: 'id'
    }
  },
  jumlahUangPelanggan: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  totalHarga: {
    type: DataTypes.INTEGER(255)
  },
  uangKembalian: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
 
}, {
  freezeTableName: true,
  hooks: {
    beforeCreate: async (transaksi, options) => {
      const harga = await Harga.findByPk(transaksi.hargaId);
      transaksi.totalHarga = harga.harga * transaksi.jumlah;
      transaksi.uangKembalian = transaksi.jumlahUangPelanggan - transaksi.totalHarga;
    }
  }
});

Harga.hasMany(Transaksi, { foreignKey: 'hargaId' });
Transaksi.belongsTo(Harga, { foreignKey: 'hargaId' });

module.exports = Transaksi;