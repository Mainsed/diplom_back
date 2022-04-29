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

    require: true
  },
  info: {
    type: String,
    require: true
  },
  infoEn: {
    type: String,
  },
  link: {
    type: String,
    require: true
  },
});

module.exports = model('employmentmaterials', schema);