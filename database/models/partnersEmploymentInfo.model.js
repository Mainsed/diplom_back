const Sequelize = require('sequelize');

const sequelize = new Sequelize('diplom_database', 'root', 'qwerty', {
  dialect: 'mysql',
  host: 'localhost'
});

const PartnersEmploymentInfo = sequelize.define('partnersemploymentinfo', {
  createdAt: {
    type: Sequelize.DATE,
    require: true,
  },
  updatedAt: {
    type: Sequelize.DATE,
    require: true,
  },
  deletedAt: {
    type: Sequelize.DATE,
  },
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    length: 36,
    require: true,
  },
  name: {
    type: Sequelize.TEXT,
    require: true,
  },
  link: {
    type: Sequelize.TEXT,
  },
  headerText: {
    type: Sequelize.JSON,
    require: true,
  },
  mainText: {
    type: Sequelize.JSON,
    require: true,
  },
  headerTextEn: {
    type: Sequelize.JSON,
  },
  mainTextEn: {
    type: Sequelize.JSON,
  },
},{
  freezeTableName: true,
  tableName: 'partnersemploymentinfo'
});

module.exports = PartnersEmploymentInfo;