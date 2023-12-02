const Joi = require('joi');

const signup = Joi.object({
  email: Joi.string().required().email().trim(),
  loginType: Joi.string().valid('EMAIL', 'GOOGLE'),
  name: Joi.string().min(3).required().trim(),
  googleId: Joi.string().required().trim(),
  password: Joi.string().min(8).trim(),
});

module.exports = {
  signup,
};
