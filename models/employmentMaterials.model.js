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