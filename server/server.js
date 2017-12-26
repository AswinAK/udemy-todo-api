var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {ToDo} = require('./models/todo');
var {User} = require('./models/user');



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
});

app.get('/todos',(req,res)=>{
    ToDo.find().then((todos)=>{
        res.send({todos});
    })
});

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        res.status(404).send('NOT VALID');
    };

    ToDo.findById(id).then((docs)=>{
        res.send({docs});
    }).catch((err)=>{
        console.log('error fetching...'+err)
        res.status(404).send();
    })

});

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