const {DataTypes, Sequelize} = require('sequelize');
const db = require('./../db/db');
const Tasks = require('./TasksModel');


const TaskLists = db.define('TaskList', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    description : {
        type : DataTypes.STRING,
        allowNull : false
    },

},
    {
        timestamps: true,
        createdAt: true,
        updatedAt: true
    });

TaskLists.hasMany(Tasks,{
    foreignKey : {
        allowNull: false,
        name: 'task_lists_id'
    },
    sourceKey: 'id'
})
TaskLists.hasMany()

module.exports = TaskLists