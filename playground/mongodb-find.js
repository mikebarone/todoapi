const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(error, db)=>{
    if(error){
        return console.log('Unable to connect to mongodb server');
    }

    console.log('connected to mongodb server');

    /*db.collection('Todos').find({
        _id: new ObjectID('58f61883d9d57cfc4c03b743')
    }).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });*/

    /*db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count:${count}`);
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });*/

    db.collection('Users').find({
        name: 'Mike'
    }).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch user Mike');
    });


    
    //db.close();
});