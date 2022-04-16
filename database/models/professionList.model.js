const Sequelize = require('sequelize');

const sequelize = new Sequelize('diplom_database', 'root', 'qwerty', {
  dialect: 'mysql',
  host: 'localhost'
});

const ProfessionList = sequelize.define('professionlist', {
  createdAt: {
    type: Sequelize.DATE,
    require: true,
  },
  updatedAt: {
    type: Sequelize.DATE,
    require: true
  },
  deletedAt: {
    type: Sequelize.DATE,
  },
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    length: 36,
    require: true
  },
  name: {
    type: Sequelize.TEXT,
    require: true
  },
  nameEn: {
    type: Sequelize.TEXT,
  },
  requirements: {
    type: Sequelize.JSON,
    require: true
  },
  requirementsEn: {
    type: Sequelize.JSON,
  },
  link: {
    type: Sequelize.TEXT,
    require: true
  },
  averagePayment: {
    type: Sequelize.TEXT,
    require: true
  },
  maxPayment: {
    type: Sequelize.TEXT,
    require: true
  },
  vacanciesNumber: {
    type: Sequelize.INTEGER,
    require: true
  },
},{
  freezeTableName: true,
  tableName: 'professionlist'
});

module.exports = ProfessionList;