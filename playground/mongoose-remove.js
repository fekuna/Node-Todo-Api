const {ObjectID} = require('mongodb');

const {app} = require('./../server/server');
const {Todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');

// Todo.remove({}).then((todo) => {
//     console.log(todo);
// }).catch((err) => {
//     console.log(err);
// });

Todo.findOneAndRemove({id: "5bec2fe4f9fcf804dd18ac20"}).then((todo) => {
    console.log(todo);
}).catch((err) => {
    console.log(err);
});