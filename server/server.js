var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {ToDo} = require('./models/todo');
var{User} = require('./models/user');


var app = express();

app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
    console.log(JSON.stringify(req.body));
    var newToDo = new ToDo({
        text: req.body.text
    });

    newToDo.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.send(err);
    });
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
});

// var newToDo = new ToDo({
//     text: 'Buy stuff'
// });

// newToDo.save().then((res)=>{
//     console.log('ToDo saved: '+res);
// },
// (err)=>{
//     console.log('ERROR');
// });

// var anotherToDo = new ToDo({
//     text: 'This is another TODO!',
//     completed: true,
//     completedAt: new Date().getMilliseconds()
// });

// anotherToDo.save().then((res)=>{
//     console.log('ToDo saved: '+res);
// },
// (err)=>{
//     console.log('ERROR');
// });