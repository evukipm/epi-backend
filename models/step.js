const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stepsSchema = new Schema({
  index: Number,
  step: String,
  votes: {
    positive: {
      type: Number,
      default: 0
    },
    negative: {
      type: Number,
      default: 0
  },
},
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Steps = mongoose.model('Steps', stepsSchema);

module.exports = Steps;