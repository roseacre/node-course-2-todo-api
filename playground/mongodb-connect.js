//use ES object destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').insertOne({
    firstname: 'Fiona',
    surname: 'Evans',
    location: 'Blackpool'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to add new user document', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 4));
  });

  db.close();
});





// const MongoClient = require('mongodb').MongoClient;
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//   if (err) {
//     return console.log('Unable to connect to mongodb server');
//   }
//   console.log('connected to mongodb server');
//
//   db.collection('Todos').insertOne({
//     text: 'something to do',
//     completed: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('unable to insert to do', err);
//     }
//
//     console.log(JSON.stringify(result.ops, undefined, 4));
//   });
//
//   db.close();
// } );


// const MongoClient = require('mongodb').MongoClient;
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//   if (err) {
//     return console.log('Unable to connect to MongoDB server');
//   }
//   console.log('Connected to MongoDB server');
//
//   // db.collection('Todos').insertOne({
//   //   text: 'Something to do',
//   //   completed: false
//   // }, (err, result) => {
//   //   if (err) {
//   //     return console.log('Unable to insert todo', err);
//   //   }
//   //
//   //   console.log(JSON.stringify(result.ops, undefined, 2));
//   // });
//
//   db.collection('Users').insertOne({
//     firstname: 'Fiona',
//     surname: 'Evans',
//     location: 'Blackpool'
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to add new user document', err);
//     }
//
//     console.log(JSON.stringify(result.ops, undefined, 4));
//   });
//
//   db.close();
// });
