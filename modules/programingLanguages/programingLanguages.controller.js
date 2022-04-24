const programingLanguagesService = require('./programingLanguages.service');

const uuidv4 = require('uuid').v4;

const programingLanguagesController = {
  findOne: async (req, res, next) => {
    try {
      const name = req.params.name;
      res.json(await programingLanguagesService.findOne({ name }));
    } catch (e) { next(e); }
  },
  findAll: async (req, res, next) => {
    try {
      res.json(await programingLanguagesService.findAll());
    } catch (e) { next(e); }
  },
  create: async (req, res, next) => {
    try {
      const entity = req.body;
      entity._id = uuidv4();
      res.json(await programingLanguagesService.create(entity));
    } catch (e) { next(e); }
  },
  update: async (req, res, next) => {
    try {
      const name = req.params.name;
      const newEntity = req.body;
      res.json(await programingLanguagesService.update(name, newEntity));
    } catch (e) { next(e); }
  },
  delete: async (req, res, next) => {
    try {
      const name = req.params.name;
      res.json(await programingLanguagesService.delete(name));
    } catch (e) { next(e); }
  },
};

module.exports = programingLanguagesController;
