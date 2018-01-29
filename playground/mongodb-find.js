//use ES object destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//can call with a callback function or promise
  db.collection('Users').find().count().then((count) => {
    console.log(`users count ${count}`);
  }, (err) => {
    console.log('unable to fetch users', err);
  });

  db.collection('Users').find({location: 'Blackpool'}).count().then((count) => {
    console.log(`selected records: ${count}`);
  }, (err) => {
    console.log('unable to fetch users', err);
  });

//find using _id
  // db.collection('Users').find({
  //   _id: new ObjectID('5a6f1ee38e4d571584ea8f8d')
  // }).toArray().then((docs) => {
  //   console.log('Users');
  //   console.log(JSON.stringify(docs, undefined, 4));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

//find all users
  // db.collection('Users').find().toArray().then((docs) => {
  //   console.log('Users');
  //   console.log(JSON.stringify(docs, undefined, 4));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

//find a subset of users
  // db.collection('Users').find({location: 'Liverpool'}).toArray().then((docs) => {
  //   console.log('Users');
  //   console.log(JSON.stringify(docs, undefined, 4));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  // db.close();
});
