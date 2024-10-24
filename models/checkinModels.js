const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Checkin = db.define('check_in', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    checkin: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    checkout: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    wakeup_call: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    purpose_of_visit: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    id_number: {
        type: DataTypes.INTEGER(255),
        allowNull: false
    },
    nationality: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    remarks: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: false
    }
}, {
    freezeTableName: true
});

module.exports = Checkin;