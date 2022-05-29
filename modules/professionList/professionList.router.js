const controller = require('./professionList.controller');
const express = require('express');
const { createValidator } = require('express-joi-validation');
const {
  professionListCreateSchema,
  professionListUpdateSchema
} = require('./professionList.validate.schemas');

const router = express.Router();
const validator = createValidator();

router.get('/:id', controller.findOne);
router.get('/', controller.findAll);
router.post('/', validator.body(professionListCreateSchema, { passError: true }), controller.create);
router.put('/:id', validator.body(professionListUpdateSchema, { passError: true }), controller.update);
router.delete('/:id', controller.delete);

module.exports = router;