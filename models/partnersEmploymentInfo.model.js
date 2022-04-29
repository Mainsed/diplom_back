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
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  link: {
    type: String,
  },
  headerText: {
    type: Array,
    require: true,
  },
  mainText: {
    type: Array,
    require: true,
  },
  headerTextEn: {
    type: Array,
  },
  mainTextEn: {
    type: Array,
  },
});

module.exports = model('partnersemploymentinfo', schema);