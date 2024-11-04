const { DataTypes } = require('sequelize');
const db = require('../../config/database');

const Checkout = db.define('check_out', {
    id_out: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    room_status: {
        type: DataTypes.ENUM('available', 'booked',),
        allowNull: false
    },
    checkin: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    checkout: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    other_charge: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    payment_method: {
        type: DataTypes.ENUM('cash', 'transfer',),
        allowNull: false
    },
    payment_status: {
        type: DataTypes.ENUM('done', 'pending',),
        allowNull: false
    },
    nominal: {
        type: DataTypes.INTEGER(255),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    remarks: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    freezeTableName: true
});

module.exports = Checkout;