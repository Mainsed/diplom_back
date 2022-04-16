const FaqList = require('../../database/models/faqList.model');

const faqListService = {
  findOne: async (criteria) => {
    const faqList = await FaqList.findOne({ where: { ...criteria, deletedAt: null } });

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
    return FaqList.findAll({ where: { deletedAt: null } });
  },
  create: async (entity) => {
    return FaqList.create(entity);
  },
  update: async (id, newEntity) => {
    return faqListService.findOne({ id })
      .then(entity => entity.update(newEntity));
  },
  delete: async (id) => {
    return faqListService.findOne({ id })
      .then(entity => entity.update({ deletedAt: new Date(Date.now()) }));
  },
};

module.exports = faqListService;
