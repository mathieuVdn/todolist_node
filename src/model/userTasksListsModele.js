const {Sequelize, DataTypes} = require('sequelize')
const Users = require('./UserModel')
const TasksLists = require('./TaskListsModel')

const UserTasksLists = sequelize.define('userTasksLists', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
    },
    users_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Movie, // 'Movies' would also work
            key: 'id'
        }
    },
    ActorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Actor, // 'Actors' would also work
            key: 'id'
        }}},

    {
        timestamps: true,
        createdAt: 'created',
    updatedAt: false

})
Users.belongsToMany(TasksLists, { through: 'UserTasksLists' })
TasksLists.belongsToMany(Users, { through: 'UserTasksLists' });

module.exports = UserTasksLists