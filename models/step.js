const mongoose = require('mongoose');

const { Schema } = mongoose;

const stepsSchema = new Schema({
  index: Number,
  step: String,
  positiveVotes: {
    type: Number,
    default: 0,
  },
  negativeVotes: {
    type: Number,
    default: 0,
  },
});

const Steps = mongoose.model('Steps', stepsSchema);

module.exports = Steps;
