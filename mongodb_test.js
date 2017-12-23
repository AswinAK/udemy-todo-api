// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  var db = database.db('TodoApp')

// INSERT TODO
//   db.collection('Todos').insertOne({
//     text: 'This is really new!',
//     completed: false
//   }, 
//   (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });


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

  db.collection('Users').count().then((count)=>{
    console.log('count of users: ',count);
  
  },(err)=>{
    console.log('ERROR while accessing count')
  })

  db.collection('Users').find().toArray().then((res)=>{
      console.log('RESULTS for USERS: ');
      console.log(JSON.stringify(res,undefined,2));
  },(err)=>{
      console.log('ERROR while getting users')
  })
 
  database.close();
});
