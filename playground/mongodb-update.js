//use ES object destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  db.collection('Users').findOneAndUpdate(
    {_id: new ObjectID('5a6f2690cd18e2207cefcdb7')},
    {$inc: {count: 5}},
    {returnOriginal: false}
  ).then((result) => {
    console.log(result);
  });
  // db.collection('Users').findOneAndUpdate(
  //   {_id: new ObjectID('5a6f2690cd18e2207cefcdb7')},
  //   {$set: {firstname: 'Brigid'}},
  //   {returnOriginal: false}
  // ).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndUpdate(
  //   {text: 'something to do'},
  //   {$set: {completed: true}},
  //   {returnOriginal: false}
  // ).then((result) => {
  //   console.log(result);
  // });

  // db.close();
});
