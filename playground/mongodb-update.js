const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017';
var dbName = 'TodoApp';

var client = new MongoClient(url, {useNewUrlParser:true});

client.connect((err) => {
    if (err) throw err;
    console.log("Connected to MongoDB server correctly");
    var db = client.db(dbName);

    db.collection("Users").findOneAndUpdate({name: "Kampret"},{
        $set: {
            name: "Dante"
        },
        $inc: {
            age: 1
        }
    }, {returnOriginal:false}).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });


    client.close();
})