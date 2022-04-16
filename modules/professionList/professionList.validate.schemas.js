const Joi = require('joi');

module.exports = {
  professionListCreateSchema: Joi.object({
    name: Joi.string().required(),
    nameEn: Joi.string().optional(),
    requirements: Joi.array().required(),
    requirementsEn: Joi.array().optional(),
    link: Joi.string().required(),
    averagePayment: Joi.string().required(),
    maxPayment: Joi.string().required(),
    vacanciesNumber: Joi.string().required(),
  }).options({ abortEarly: false }),
  professionListUpdateSchema: Joi.object({
    name: Joi.string().optional(),
    nameEn: Joi.string().optional(),
    requirements: Joi.array().optional(),
    requirementsEn: Joi.array().optional(),
    link: Joi.string().optional(),
    averagePayment: Joi.string().optional(),
    maxPayment: Joi.string().optional(),
    vacanciesNumber: Joi.string().optional(),
  }).options({ abortEarly: false }),
};
