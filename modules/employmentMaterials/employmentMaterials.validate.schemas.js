const Joi = require('joi');

module.exports = {
  employmentMaterialsCreateSchema: Joi.object({
    info: Joi.string().required(),
    infoEn: Joi.string().optional(),
    link: Joi.string().required(),

  }).options({ abortEarly: false }),
  employmentMaterialsUpdateSchema: Joi.object({
    info: Joi.string().optional(),
    infoEn: Joi.string().optional(),
    link: Joi.string().optional(),
  }).options({ abortEarly: false }),
};
