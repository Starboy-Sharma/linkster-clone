const express = require('express');

const router = express.Router();

// USER
router.use('/user', require('../../api/User/userRoutes'));

module.exports = router;
