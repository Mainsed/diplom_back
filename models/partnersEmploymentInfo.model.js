const {Schema, model} = require('mongoose');

const schema = new Schema({
  createdAt: {
    type: Date,
    require: true,
  },
  updatedAt: {
    type: Date,
    require: true,
  },
  deletedAt: {
    type: Date,
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