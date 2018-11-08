const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Step = require('./step'),

const postSchema = new Schema({
  title: String,
  date: String,
  text: String,
  author: {
    type: ObjectId,
    ref: 'User'
  }, 
  steps: [Step.schema],
  
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;