const errorMessages = {
  apiStatus: 'Failure',
  auth: 'You are not authorized',
};

const successMessages = {
  apiStatus: 'success',
  login: 'Login successful',
  registerUser: 'Register user successful',
};

exports.sendError = (error, res, code) => {
  console.error('exports.sendError ->', error);

  const response = {
    success: false,
    errorCode: error.errorCode,
    message: errorMessages[error.errorCode],
    result: {
      error: error.error,
    },
    time: Date.now(),
  };

  if (response.errorCode === 'validationError') {
    response.message = response.result.error;
  }

  res.status(code).json(response);
};

exports.sendSuccess = (result, res, code) => {
  const response = {
    ...result,
    success: true,
    successCode: result.successCode,
    message: successMessages[result.successCode],
    time: Date.now(),
  };

  res.status(code).json(response);
};
