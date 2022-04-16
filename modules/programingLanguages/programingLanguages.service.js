const ProgramingLanguages = require('../../database/models/programingLanguages.model');

const programingLanguagesService = {
  findOne: async (criteria) => {
    const programingLanguages = await ProgramingLanguages.findOne({ where: { ...criteria, deletedAt: null } });

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
    return ProgramingLanguages.findAll({ where: { deletedAt: null } });
  },
  create: async (entity) => {
    return ProgramingLanguages.create(entity);
  },
  update: async (id, newEntity) => {
    return programingLanguagesService.findOne({ id })
      .then(entity => entity.update(newEntity));
  },
  delete: async (id) => {
    return programingLanguagesService.findOne({ id })
      .then(entity => entity.update({ deletedAt: new Date(Date.now()) }));
  },
};

module.exports = programingLanguagesService;
