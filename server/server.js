var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');

app = express();
app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }).catch((err) => {
        res.status(400).send(err);
    });
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

module.exports = {app};