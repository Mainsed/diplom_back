const faqListService = require('./faqList.service');

const uuidv4 = require('uuid').v4;

const faqListController = {
  findOne: async (req, res, next) => {
    try {
      const id = req.params.id;
      res.json(await faqListService.findOne({ id }));
    } catch (e) { next(e); }
  },
  findAll: async (req, res, next) => {
    try {
      res.json(await faqListService.findAll());
    } catch (e) { next(e); }
  },
  create: async (req, res, next) => {
    try {
      const entity = req.body;
      entity.id = uuidv4();
      res.json(await faqListService.create(entity));
    } catch (e) { next(e); }
  },
  update: async (req, res, next) => {
    try {
      const id = req.params.id;
      const newEntity = req.body;
      res.json(await faqListService.update(id, newEntity));
    } catch (e) { next(e); }
  },
  delete: async (req, res, next) => {
    try {
      const id = req.params.id;
      res.json(await faqListService.delete(id));
    } catch (e) { next(e); }
  },
};

module.exports = faqListController;
