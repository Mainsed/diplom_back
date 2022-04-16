const employmentMaterialsService = require('./employmentMaterials.service');

const uuidv4 = require('uuid').v4;

const employmentMaterialsController = {
  findOne: async (req, res, next) => {
    try {
      const id = req.params.id;
      res.json(await employmentMaterialsService.findOne({ id }));
    } catch (e) { next(e); }
  },
  findAll: async (req, res, next) => {
    try {
      res.json(await employmentMaterialsService.findAll());
    } catch (e) { next(e); }
  },
  create: async (req, res, next) => {
    try {
      const entity = req.body;
      entity.id = uuidv4();
      res.json(await employmentMaterialsService.create(entity));
    } catch (e) { next(e); }
  },
  update: async (req, res, next) => {
    try {
      const id = req.params.id;
      const newEntity = req.body;
      res.json(await employmentMaterialsService.update(id, newEntity));
    } catch (e) { next(e); }
  },
  delete: async (req, res, next) => {
    try {
      const id = req.params.id;
      res.json(await employmentMaterialsService.delete(id));
    } catch (e) { next(e); }
  },
};

module.exports = employmentMaterialsController;
