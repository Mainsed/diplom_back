const ProfessionList = require('../../database/models/professionList.model');

const professionListService = {
  findOne: async (criteria) => {
    const professionList = await ProfessionList.findOne({ where: { ...criteria, deletedAt: null } });

    if (!professionList) throw new Error(JSON.stringify(
      {
        message: 'Not found profession list',
        status: 'Not Found',
        code: 404
      }
    ));

    return professionList;
  },
  findAll: async () => {
    return ProfessionList.findAll({ where: { deletedAt: null } });
  },
  create: async (entity) => {
    return ProfessionList.create(entity);
  },
  update: async (id, newEntity) => {
    return professionListService.findOne({ id })
      .then(entity => entity.update(newEntity));
  },
  delete: async (id) => {
    return professionListService.findOne({ id })
      .then(entity => entity.update({ deletedAt: new Date(Date.now()) }));
  },
};

module.exports = professionListService;
