const {MongoClient, ObjectID} = require('mongodb');
const test = require('assert');

const client = new MongoClient("mongodb://localhost:27017", {useNewUrlParser:true});
var dbName = "TodoApp";

client.connect((err) => {
    test.equal(null, err);
    var db = client.db(dbName);

    //deleteMany
    // db.collection('Users').deleteMany({name:"Kuda"}).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // });

    //deleteOne
    // db.collection('Users').deleteOne({name:"Alfan"}).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // });

    //findOneAndDelete
    // db.collection('Users').findOneAndDelete({name:"Alfan"}).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // });

    //Chalange

    // db.collection("Users").deleteMany({
    //     name: "Andrew"
    // })
    //                     .then((result) => {
    //                         console.log(`DELETED`);
    //                     }).catch((err) => {
    //                         console.log(`something went wrong`);
    //                     });

    // db.collection("Users").findOneAndDelete({_id: new ObjectID("5be7dc1e14c16523a041005d")}).then((result) => {
    //     console.log(result);
    // })


    client.close();
})