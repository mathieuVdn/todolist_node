const {DataTypes, Sequelize} = require('sequelize');
const db = require('./../db/db')
const TaskLists = require('./TaskListsModel')

const Users = db.define('users', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username : {
        type: DataTypes.STRING,
        allowNull: false
    },
    mail : {
        type: DataTypes.STRING,
        validate : {
            isEmail: true
        }
    },
    age :{
        type : DataTypes.INTEGER
    }
    },
    {
        timestamps : true,
        createdAt : true,
        updatedAt: false

    }
)
Users.hasMany(TaskLists, {
    foreignKey : {
        allowNull : false,
        name: 'creator_id'
    },
    sourceKey :'id'
})
module.exports = Users