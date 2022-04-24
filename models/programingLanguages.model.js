const {Schema, model} = require('mongoose');

const schema = new Schema({
  createdAt: {
    type: Date,
    require: true,
  },
  updatedAt: {
    type: Date,
    require: true
  },
  deletedAt: {
    type: Date,
  },
  name: {
    type: String,
    require: true,
    unique: true,
  },
  writeNowPerc: {
    type: Number,
    require: true,
  },
  changes: {
    type: Number,
    require: true
  },
  writeNow: {
    type: Number,
    require: true
  },
  useSec: {
    type: Number,
    require: true
  },
  usePrim: {
    type: Number,
    require: true
  },
  likeIndex: {
    type: Number,
    require: true
  },
});

module.exports = model('programminglanguages', schema);