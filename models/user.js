const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  avatar: {
    type: String,
    default: 'http://placehold.it/100x100',
  },
  email: String,
  description: String,
});
console.log('test')
const User = mongoose.model('User', userSchema);

module.exports = User;
