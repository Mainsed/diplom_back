const Joi = require('joi');

module.exports = {
  programingLanguagesCreateSchema: Joi.object({
    name: Joi.string().required().max(36),
    writeNowPerc: Joi.string().required(),
    changes: Joi.string().required(),
    writeNow: Joi.string().required(),
    useSec: Joi.string().required(),
    usePrim: Joi.string().required(),
    likeIndex: Joi.string().required(),
  }).options({ abortEarly: false }),
  programingLanguagesUpdateSchema: Joi.object({
    name: Joi.string().optional().max(36),
    writeNowPerc: Joi.string().optional(),
    changes: Joi.string().optional(),
    writeNow: Joi.string().optional(),
    useSec: Joi.string().optional(),
    usePrim: Joi.string().optional(),
    likeIndex: Joi.string().optional(),
  }).options({ abortEarly: false }),
};
