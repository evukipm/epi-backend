const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  username: String,
  password: String,
  avatar: {
    type: String,
    default: 'http://placehold.it/100x100',
  },
  email: String,
  description: String,
  following: {
    type: ObjectId,
    ref: 'User',
  },
  favs: {
    type: ObjectId,
    ref: 'Post',
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
