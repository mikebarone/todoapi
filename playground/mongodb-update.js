const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(error, db)=>{
    if(error){
        return console.log('Unable to connect to mongodb server');
    }

    console.log('connected to mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('58f62a413f2191fc53dcb761')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'John'
    },{
        $set: {
            name: 'Tobia'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    //db.close();
});