const controller = require('./employmentMaterials.controller');
const express = require('express');
const { createValidator } = require('express-joi-validation');
const {
  employmentMaterialsCreateSchema,
  employmentMaterialsUpdateSchema
} = require('./employmentMaterials.validate.schemas');

const router = express.Router();
const validator = createValidator();

router.get('/:id', controller.findOne);
router.get('/', controller.findAll);
router.post('/', validator.body(employmentMaterialsCreateSchema, {passError: true}), controller.create);
router.put('/:id', validator.body(employmentMaterialsUpdateSchema, {passError: true}), controller.update);
router.delete('/:id', controller.delete);

module.exports = router;