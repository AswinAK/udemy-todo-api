var mongoose = require('mongoose');

var User = mongoose.model('User',{
    text:{
        type: String
    },
    age:{
        type: Number
    },
    location:{
        type: String
    }
});

module.exports = {User}