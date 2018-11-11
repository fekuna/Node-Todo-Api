// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const assert = require("assert");

var url = "mongodb://localhost:27017";

var obj = new ObjectID;
console.log(obj);

var dbName = "TodoApp";
const client = new MongoClient(url, { useNewUrlParser: true });

client.connect((err, client) => {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);
  // db.collection('Todos').insertOne({
  //     Todo: "Makan",
  //     completed: false
  // },(err, result) => {
  //     assert.equal(null, err);
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  // })

//   db.collection("Users").insertOne(
//     {
//       name: "Kuda",
//       age: 20,
//       location: "Pamulang"
//     },
//     (err, result) => {
//       assert.equal(null, err);
//       console.log(JSON.stringify(result.ops, undefined, 2));
//     }
//   );

  client.close();
});
