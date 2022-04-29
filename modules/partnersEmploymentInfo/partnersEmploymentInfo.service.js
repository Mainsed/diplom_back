const PartnersEmploymentInfo = require('../../models/partnersEmploymentInfo.model');

const partnersEmploymentInfoService = {
  findOne: async (criteria) => {
    const partnersEmploymentInfo = await PartnersEmploymentInfo.findOne({ ...criteria, deletedAt: null });

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
    return PartnersEmploymentInfo.find({ deletedAt: null });
  },
  create: async (entity) => {
    return PartnersEmploymentInfo.create(entity);
  },
  update: async (_id, newEntity) => {
    return PartnersEmploymentInfo.updateOne({ _id }, newEntity);
  },
  delete: async (_id) => {
    return PartnersEmploymentInfo.updateOne({ _id }, { deletedAt: new Date(Date.now()) });
  },
};

module.exports = partnersEmploymentInfoService;
