const ProgramingLanguages = require('../../models/programingLanguages.model');

const programingLanguagesService = {
  findOne: async (criteria) => {
    const programingLanguages = await ProgramingLanguages.findOne({ ...criteria, deletedAt: null });

    if (!programingLanguages) throw new Error(JSON.stringify(
      {
        message: 'Not found programing languages',
        status: 'Not Found',
        code: 404
      }
    ));

    return programingLanguages;
  },
  findAll: async () => {
    return ProgramingLanguages.find({ deletedAt: null });
  },
  create: async (entity) => {
    return ProgramingLanguages.create(entity);
  },
  update: async (_id, newEntity) => {
    return ProgramingLanguages.updateOne({ _id }, newEntity);
  },
  delete: async (_id) => {
    return ProgramingLanguages.updateOne({ _id }, { deletedAt: new Date(Date.now()) });
  },
};

module.exports = programingLanguagesService;
