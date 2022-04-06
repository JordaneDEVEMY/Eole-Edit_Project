const ApiError = require('../errors/apiError');
const logger = require('./logger');

/**
  * Middleware that respond to a next method with an error as argument
  * @param {object} err Error class
  * @param {object} res Express response object
  */
const errorHandler = (err, res) => {
  let { statusCode, message } = err;

  statusCode = statusCode ?? 500;

  if (statusCode === 500) {
    logger.error(err);
    message = 'Internal Server Error';
  }

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

module.exports = {
  ApiError,
  errorHandler,
};
