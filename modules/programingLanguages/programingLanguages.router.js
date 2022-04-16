const controller = require('./programingLanguages.controller');
const express = require('express');
const { createValidator } = require('express-joi-validation');
const {
  programingLanguagesCreateSchema,
  programingLanguagesUpdateSchema
} = require('./programingLanguages.validate.schemas');
const { } = require('../../utils/general.validate.schemas');

const router = express.Router();
const validator = createValidator();

router.get('/:name', controller.findOne);
router.get('/', controller.findAll);
router.post('/', validator.body(programingLanguagesCreateSchema, { passError: true }), controller.create);
router.put('/:name', validator.body(programingLanguagesUpdateSchema, { passError: true }), controller.update);
router.delete('/:name', controller.delete);

module.exports = router;