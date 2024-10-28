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
  kategori: {
    type: DataTypes.ENUM('sepatu', 'selimut', 'bed_cover', 'pakaian'),
    multiple: true,
    allowNull: false
  },
  jumlah: {
    type: DataTypes.INTEGER(11),
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
      transaksi.totalHarga = harga.harga * transaksi.jumlah;
    }
  }
});

Harga.hasMany(Transaksi, { foreignKey: 'hargaId' });
Transaksi.belongsTo(Harga, { foreignKey: 'hargaId' });

module.exports = Transaksi;