const Joi = require('joi');

module.exports = {
  faqListCreateSchema: Joi.object({
    question: Joi.string().required(),
    questionEn: Joi.string().optional(),
    answear: Joi.string().required(),
    answearEn: Joi.string().optional(),
  }).options({ abortEarly: false }),
  faqListUpdateSchema: Joi.object({
    question: Joi.string().optional(),
    questionEn: Joi.string().optional(),
    answear: Joi.string().optional(),
    answearEn: Joi.string().optional(),
  }).options({ abortEarly: false }),
};
