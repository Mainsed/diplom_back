const controller = require('./partnersEmploymentInfo.controller');
const express = require('express');
const { createValidator } = require('express-joi-validation');
const {
  partnersEmploymentInfoCreateSchema,
  partnersEmploymentInfoUpdateSchema
} = require('./partnersEmploymentInfo.validate.schemas');


const router = express.Router();
const validator = createValidator();

router.get('/:id', controller.findOne);
router.get('/', controller.findAll);
router.post('/', validator.body(partnersEmploymentInfoCreateSchema, { passError: true }), controller.create);
router.put('/:id', validator.body(partnersEmploymentInfoUpdateSchema, { passError: true }), controller.update);
router.delete('/:id', controller.delete);

module.exports = router;