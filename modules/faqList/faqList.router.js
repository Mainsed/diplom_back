const controller = require('./faqList.controller');
const express = require('express');
const { createValidator } = require('express-joi-validation');
const {
  faqListCreateSchema,
  faqListUpdateSchema,
} = require('./faqList.validate.schemas');
const { } = require('../../utils/general.validate.schemas');

const router = express.Router();
const validator = createValidator();

router.get('/:id', controller.findOne);
router.get('/', controller.findAll);
router.post('/', validator.body(faqListCreateSchema, { passError: true }), controller.create);
router.put('/:id', validator.body(faqListUpdateSchema, { passError: true }), controller.update);
router.delete('/:id', controller.delete);

module.exports = router;