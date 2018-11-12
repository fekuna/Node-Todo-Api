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
        res.send(err);
    });
});

app.get('/', (req, res) => {
    console.log("coeg");
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});