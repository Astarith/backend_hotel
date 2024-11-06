const {DataTypes} = require('sequelize');
const db = require('../../config/database');

const Editroom = db.define('edit_room', {
    id_editroom: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true 
    },
    room_number: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    room_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER(255),
        allowNull: true
    },
    facilities: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
}, {
    freezeTableName: true
});

module.exports = Editroom;