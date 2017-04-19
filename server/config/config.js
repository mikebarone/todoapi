var env = process.env.NODE_ENV || 'development';

if(env === 'development') {
    process.env.PORT = '3000';
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
    process.env.PORT = '3000';
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
} else if( env === 'production' ) {
    process.env.MONGODB_URI = 'mongodb://todoapp:todoapp@ds163340.mlab.com:63340/todoapp'
}