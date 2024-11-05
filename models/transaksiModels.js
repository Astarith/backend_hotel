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
  kategori: {
    type: DataTypes.ENUM('dry clean', 'wash and iron', 'daily laundry'),
    multiple: true,
    allowNull: false
  },
  jumlah: {
    type: DataTypes.STRING(255),
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
    }
  }
}, {
  freezeTableName: true,
  hooks: {
    beforeCreate: async (transaksi, options) => {
      const harga = await Harga.findByPk(transaksi.hargaId);
      transaksi.totalHarga = harga.harga * transaksi.jumlah;
    }
  }
});

Harga.hasMany(Transaksi, { foreignKey: 'hargaId' });
Transaksi.belongsTo(Harga, { foreignKey: 'hargaId' });

module.exports = Transaksi;