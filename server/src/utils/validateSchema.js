const response = require('../response');

module.exports = {

  validateSchema(schema, key) {
    return function (req, res, next) {
      const requestType = {
        GET: 'query',
        POST: 'body',
        PUT: 'body',
        DELETE: 'body',
      };

      if (schema[key] === undefined) throw new Error(`Schema key ${key} not defined`);

      const { error } = schema[key].validate(req[requestType[req.method]]);

      const valid = error === null;
      if (valid) {
        next();
      } else {
        const { details } = error;
        console.log(`Error in ${key}: ${details}`);
        const message = details.map((i) => i.message).join(',');
        response.sendError(
          { errorCode: 'validationError', error: message },
          res,
          400,
        );
      }
    };
  },
};
