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
  name: {
    type: String,
    require: true
  },
  nameEn: {
    type: String,
  },
  requirements: {
    type: Array,
    require: true
  },
  requirementsEn: {
    type: Array,
  },
  link: {
    type: String,
    require: true
  },
  averagePayment: {
    type: String,
    require: true
  },
  maxPayment: {
    type: String,
    require: true
  },
  vacanciesNumber: {
    type: Number,
    require: true
  },
},{
  freezeTableName: true,
  tableName: 'professionlist'
});

module.exports = model('professionlist', schema);