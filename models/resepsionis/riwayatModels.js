const { DataTypes } = require('sequelize');
const db = require('../../config/database');

const Riwayat = db.define('riwayat_transaksi', {
    id_riwayat: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    tanggal_pesan: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    reservation_code: {
        type: DataTypes.INTEGER(255),
        allowNull: false
    },
    jumlah_kamar: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('pending', 'approved',),
        allowNull: false
    },
}, {
    freezeTableName: true
});

module.exports = Riwayat;