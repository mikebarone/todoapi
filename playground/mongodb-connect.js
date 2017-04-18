//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(error, db)=>{
    if(error){
        return console.log('Unable to connect to mongodb server');
    }

    console.log('connected to mongodb server');

    /*db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined,2));
    });*/

    /*db.collection('Users').insertOne({
        name: 'Mike',
        age: 30,
        location: 'Montreal'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert user', err);
        }

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    });
    db.close();*/
});