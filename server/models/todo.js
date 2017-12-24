var mongoose = require('mongoose');

var ToDo = mongoose.model('ToDo',{
    text:{
        type: String,
        required:true
    },
    completed:{
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});

module.exports = {ToDo}