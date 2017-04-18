const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(error, db)=>{
    if(error){
        return console.log('Unable to connect to mongodb server');
    }

    console.log('connected to mongodb server');

    // // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat pasta'}).then((result) => {
    //     console.log(result);
    // });

    // // deleteOne
    // db.collection('Todos').deleteOne({text: 'Love travel'}).then((result) => {
    //     console.log(result);
    // });
    
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Mike'}).then((result) => {
    //      console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('58f621743f2191fc53dcb75b')}).then((result)=>{
         console.log(result);
    });
    //db.close();
});