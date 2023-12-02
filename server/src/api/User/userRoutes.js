const express = require('express');

const router = express.Router();
const controller = require('./userController');
const schema = require('./schema');
const { validateSchema } = require('../../utils/validateSchema');

router.post('/auth', controller.authUser)
  .post('/', validateSchema(schema, 'signup'), controller.registerUser);

module.exports = router;
