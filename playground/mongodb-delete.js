//use ES object destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').deleteOne({firstname: 'Nigel'}).then((result) => {
    console.log(result);
  });

  db.collection('Users').deleteMany({location: 'Blackpool'}).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5a6f6c19ed326090b88cc942')}).then((result) => {
    console.log(result);
  });
  // db.collection('Todos').deleteMany({text: 'something to do'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'something to do'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  // db.close();
});
