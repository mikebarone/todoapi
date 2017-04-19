var mongoose = require('mongoose');

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: ''
};

mongoose.Promise = global.Promise;
mongoose.connect( db.localhost || db.mlab);

module.exports = {mongoose};