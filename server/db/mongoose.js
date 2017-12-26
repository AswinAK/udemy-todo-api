var mongoose = require('mongoose');
var DB_URI = process.env.MONGODB_URI||'mongodb://localhost:27017/ToDoApp'
mongoose.Promise = global.Promise;
mongoose.connect(DB_URI,{ useMongoClient: true });

module.exports = {
    mongoose
}