var mongoose = require('mongoose');

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://todoapp:todoapp@ds163340.mlab.com:63340/todoapp'
};

mongoose.Promise = global.Promise;
mongoose.connect( process.env.PORT ? db.mlab : db.localhost);

module.exports = {mongoose};