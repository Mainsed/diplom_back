const Joi = require('joi');

module.exports = {
  partnersEmploymentInfoCreateSchema: Joi.object({
    name: Joi.string().required(),
    link: Joi.string().required(),
    headerText: Joi.array().required(),
    mainText: Joi.array().required(),
    headerTextEn: Joi.array().optional(),
    mainTextEn: Joi.array().optional(),
  }).options({ abortEarly: false }),
  partnersEmploymentInfoUpdateSchema: Joi.object({
    name: Joi.string().optional(),
    link: Joi.string().optional(),
    headerText: Joi.array().optional(),
    mainText: Joi.array().optional(),
    headerTextEn: Joi.array().optional(),
    mainTextEn: Joi.array().optional(),
  }).options({ abortEarly: false }),
};
