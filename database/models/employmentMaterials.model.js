const Sequelize = require('sequelize');

const sequelize = new Sequelize('diplom_database', 'root', 'qwerty', {
  dialect: 'mysql',
  host: 'localhost'
});

const EmploymentMaterials = sequelize.define('employmentmaterials', {
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
  info: {
    type: Sequelize.TEXT,
    require: true
  },
  infoEn: {
    type: Sequelize.TEXT,
  },
  link: {
    type: Sequelize.TEXT,
    require: true
  },
});

module.exports = EmploymentMaterials;