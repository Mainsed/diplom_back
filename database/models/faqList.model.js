const Sequelize = require('sequelize');

const sequelize = new Sequelize('diplom_database', 'root', 'qwerty', {
  dialect: 'mysql',
  host: 'localhost'
});

const FaqList = sequelize.define('faqlist', {
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
  question: {
    type: Sequelize.TEXT,
    require: true
  },
  questionEn: {
    type: Sequelize.TEXT,
  },
  answear: {
    type: Sequelize.TEXT,
    require: true
  },
  answearEn: {
    type: Sequelize.TEXT,
  },
},{
  freezeTableName: true,
  tableName: 'faqlist'
});

module.exports = FaqList;