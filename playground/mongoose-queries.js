const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userId = '5a73104a865c744812eb37f1xx';

if (!ObjectID.isValid(userId)) {
  console.log('User ID is not valid');
} else {
  User.findById(userId).then((user) => {
    if(!user) {
      return console.log("User ID not found");
    }
    console.log('User by ID', user);
  });
}

//var id = '5a7626e27fbf7d6609c27da6';

// if (!ObjectID.isValid(id)) {
//   console.log('ID is not valid');
// };
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));
