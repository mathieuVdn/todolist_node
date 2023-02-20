module.exports = (app, Users, Tasks, TaskLists, UserTasksLists) => {
    app.post('/users', (req, res) => {
        try {
            Users.create(req.body).then(user => {
                res.status(201).send(user)
            })
        }
        catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    })
}