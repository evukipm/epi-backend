const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const postSchema = new Schema({
  title: String,
  date: String,
  text: String,
  owner: {
    type: ObjectId,
    ref: 'User'
  }, 
  steps: [{
    type: ObjectId,
    ref: 'Steps'
  }],
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;