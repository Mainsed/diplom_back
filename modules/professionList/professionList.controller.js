const professionListService = require('./professionList.service');

const uuidv4 = require('uuid').v4;

const professionListController = {
  findOne: async (req, res, next) => {
    try {
      const id = req.params.id;
      res.json(await professionListService.findOne({ id }));
    } catch (e) { next(e); }
  },
  findAll: async (req, res, next) => {
    try {
      res.json(await professionListService.findAll());
    } catch (e) { next(e); }
  },
  create: async (req, res, next) => {
    try {
      const entity = req.body;
      entity.id = uuidv4();
      res.json(await professionListService.create(entity));
    } catch (e) { next(e); }
  },
  update: async (req, res, next) => {
    try {
      const id = req.params.id;
      const newEntity = req.body;
      res.json(await professionListService.update(id, newEntity));
    } catch (e) { next(e); }
  },
  delete: async (req, res, next) => {
    try {
      const id = req.params.id;
      res.json(await professionListService.delete(id));
    } catch (e) { next(e); }
  },
};

module.exports = professionListController;
