const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3004;
const db = require('./src/db/db');
const Users = require('./src/model/UserModel')
const Tasks = require('./src/model/TasksModel')
const TaskLists = require('./src/model/TaskListsModel')

app.use(bodyParser.json())

db.sync({force: true})
    .then(_ => {
        app.listen(port, () => {
            console.log(`le serveur tourne sur le port ${port}`)
        })

}).catch(err => console.log("erreur" + err))
