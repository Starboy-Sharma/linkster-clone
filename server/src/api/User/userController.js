const asyncHandler = require('express-async-handler');
const { sendSuccess } = require('../../response');

// @desc Auth user/set token
// route POST /api/users/auth
// access @public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'This is a cool msg',
  });
});

// @desc Auth user/set token
// route POST /api/users/
// access @public
const registerUser = asyncHandler(async (req, res) => {
  // const result = {
  //   data: [1, 2, 3, 4, 5, 6],
  // };
  // return sendSuccess({ result, successCode: 'registerUser' }, res, 201);
  throw new Error('ERROR: Could not register user');
});

module.exports = {
  authUser,
  registerUser,
};
