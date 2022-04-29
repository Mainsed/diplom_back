const FaqList = require('../../models/faqList.model');

const faqListService = {
  findOne: async (criteria) => {
    const faqList = await FaqList.findOne({ ...criteria, deletedAt: null });

    if (!faqList) throw new Error(JSON.stringify(
      {
        message: 'Not found faq list',
        status: 'Not Found',
        code: 404
      }
    ));

    return faqList;
  },
  findAll: async () => {
    return FaqList.find({ deletedAt: null });
  },
  create: async (entity) => {
    return FaqList.create(entity);
  },
  update: async (_id, newEntity) => {
    return FaqList.updateOne({ _id }, newEntity);
  },
  delete: async (_id) => {
    return FaqList.updateOne({ _id }, { deletedAt: new Date(Date.now()) });
  },
};

module.exports = faqListService;
