const {Sequelize, DataTypes} = require('sequelize');
const db = require('./../db/db');

const Tasks = db.define('tasks', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    description  : {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        timestamps : true,
        createdAt : true,
        updatedAt: false
    })


module.exports = Tasks