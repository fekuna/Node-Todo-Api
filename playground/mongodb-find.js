const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

var url = "mongodb://localhost:27017";
var dbName = "TodoApp";

var client = new MongoClient(url, {useNewUrlParser:true});

client.connect((err) => {
    assert.equal(null, err);
    console.log("Connected correctly to MongoDB server");

    var db = client.db(dbName);

    // db.collection("Todos").find({

    // }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // })

    db.collection("Users").find({name: "Alfan"}).toArray().then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }).catch((err) => {
        console.log(err);
    });

    client.close();
})