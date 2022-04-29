const {Schema, model} = require('mongoose');

const schema = new Schema({
  createdAt: {
    type: Date,
    require: true,
    default: new Date(Date.now()),
  },
  updatedAt: {
    type: Date,
    require: true,
    default: new Date(Date.now()),
  },
    deletedAt: {
    type: Date,
    default: null,
  },
  _id: {
    type: String,
    primaryKey: true,
    require: true
  },
  question: {
    type: String,
    require: true
  },
  questionEn: {
    type: String,
  },
  answear: {
    type: String,
    require: true
  },
  answearEn: {
    type: String,
  },
});

module.exports = model('faqlist', schema);