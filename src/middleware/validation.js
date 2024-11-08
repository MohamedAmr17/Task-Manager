const Joi = require('joi');

const taskValidation = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
    status: Joi.string().valid('incomplete', 'completed')
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const userValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = { taskValidation, userValidation };