const ProfessionList = require('../../models/professionList.model');

const professionListService = {
  findOne: async (criteria) => {
    const professionList = await ProfessionList.findOne({ ...criteria, deletedAt: null });

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
    return ProfessionList.find({ deletedAt: null });
  },
  create: async (entity) => {
    return ProfessionList.create(entity);
  },
  update: async (_id, newEntity) => {
    return ProfessionList.updateOne({ _id }, newEntity);
  },
  delete: async (_id) => {
    return ProfessionList.updateOne({ _id }, { deletedAt: new Date(Date.now()) });
  },
};

module.exports = professionListService;
