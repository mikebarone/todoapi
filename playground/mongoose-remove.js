const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
//    console.log(result);
//});

//Todo.findOneAndRemove();
Todo.findByIdAndRemove('58f76ca7d5bd700c7b351544').then((todo) => {
    console.log(todo);
});