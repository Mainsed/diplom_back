const Sequelize = require('sequelize');

const sequelize = new Sequelize('diplom_database', 'root', 'qwerty', {
  dialect: 'mysql',
  host: 'localhost'
});

const ProgramingLanguages = sequelize.define('programminglanguages', {
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
  name: {
    type: Sequelize.TEXT,
    defaultValue: Sequelize.UUIDV4,
    length: 36,
    primaryKey: true,
    require: true
  },
  writeNowPerc: {
    type: Sequelize.INTEGER,
    require: true,
  },
  changes: {
    type: Sequelize.INTEGER,
    require: true
  },
  writeNow: {
    type: Sequelize.INTEGER,
    require: true
  },
  useSec: {
    type: Sequelize.INTEGER,
    require: true
  },
  usePrim: {
    type: Sequelize.INTEGER,
    require: true
  },
  likeIndex: {
    type: Sequelize.FLOAT,
    require: true
  },
});

module.exports = ProgramingLanguages;