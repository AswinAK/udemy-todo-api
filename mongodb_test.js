// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  var db = database.db('TodoApp')

// INSERT TODO
  db.collection('Todos').insertOne({
    text: 'More stuff to do',
    completed: false
  }, 
  (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });


// INSERT USER
//   db.collection('Users').insertOne({
//     name: 'No One',
//     age: 0
//   },
//   (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });


  // GET COUNT OF RECORDS
  db.collection('Users').count().then((count)=>{
    console.log('count of users: ',count);
  
  },(err)=>{
    console.log('ERROR while accessing count')
  })


  //GET  RECORDS WITH NAME
  db.collection('Users').find({name: 'Jojo'}).toArray().then((res)=>{
      console.log('RESULTS for USERS: ');
      console.log(JSON.stringify(res,undefined,2));
  },(err)=>{
      console.log('ERROR while getting users')
  })


  // GET COUNT OF RECORDS
  db.collection('Todos').count().then((count)=>{
    console.log('count of Todos: ',count);
  
  },(err)=>{
    console.log('ERROR while accessing count')
  })

  // GET RECORDS
  db.collection('Todos').find().toArray().then((res)=>{
      console.log('RESULTS for Todos: ');
      console.log(JSON.stringify(res,undefined,2));
  },(err)=>{
      console.log('ERROR while getting Todos')
  });


  // db.collection('Todos').deleteOne({text:'Something to do'}).then((res)=>{
  //   console.log('deleteOne: '+res);
  // },
  // (err)=>{
  //   console.log('ERROR WHILE DELETING...');
  // });

  // db.collection('Todos').deleteOne({text:'Something to do'}).then((res)=>{
  //   console.log('deleteOne: '+res);
  // },
  // (err)=>{
  //   console.log('ERROR WHILE DELETING...');
  // });

  // db.collection('Todos').findOneAndDelete({text:'This is really new!'}).then((res)=>{
  //   console.log('findOneAndDelete: '+JSON.stringify(res,undefined,2));
  // },
  // (err)=>{
  //   console.log('ERROR WHILE DELETING...');
  // });


  //UPDATE
  db.collection('Todos').findOneAndUpdate({text:'More stuff to do'},
    {$set:{completed:true}},
    {returnOriginal:false}).then((res)=>{
      console.log('findOneAndUpdate: '+res);
    },
    (err)=>{
      console.log('ERR: '+err);
    });

  database.close();
});
