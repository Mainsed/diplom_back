const PartnersEmploymentInfo = require('../../models/partnersEmploymentInfo.model');

const partnersEmploymentInfoService = {
  findOne: async (criteria) => {
    const partnersEmploymentInfo = await PartnersEmploymentInfo.findOne({ where: { ...criteria, deletedAt: null } });

    if (!partnersEmploymentInfo) throw new Error(JSON.stringify(
      {
        message: 'Not found partners employment info',
        status: 'Not Found',
        code: 404
      }
    ));

    return partnersEmploymentInfo;
  },
  findAll: async () => {
    return PartnersEmploymentInfo.findAll({ where: { deletedAt: null } });
  },
  create: async (entity) => {
    return PartnersEmploymentInfo.create(entity);
  },
  update: async (id, newEntity) => {
    return partnersEmploymentInfoService.findOne({ id })
      .then(entity => entity.update(newEntity));
  },
  delete: async (id) => {
    return partnersEmploymentInfoService.findOne({ id })
      .then(entity => entity.update({ deletedAt: new Date(Date.now()) }));
  },
};

module.exports = partnersEmploymentInfoService;
