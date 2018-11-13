const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {user} = require('../server/models/user');

var id = "5be8ae97300c760ed5e6e99e";

// if(!ObjectID.isValid(id)){
//     console.log("ID is not valid");
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos", todos);
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("FindOne", todo);
// })

// Todo.findById(id).then((todo) => {
//     console.log("findById", todo);
// }).catch((e) => {
//     console.log(e);
// })

user.findById(id).then((user) => {
    if(!user){
        return console.log("ID not found");
    }
    console.log(user);
}).catch((err) => {
    console.log(err);
});