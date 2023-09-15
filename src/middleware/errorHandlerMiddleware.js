/**
 * Error Handling Middleware
 *
 * @param {Error} error - The error object representing the encountered error.
 * @param {Object} req - The Express.js request object.
 * @param {Object} res - The Express.js response object.
 * @param {Function} next - The next middleware function in the chain.
 */
export const errorHandlerMiddleware = (error, req, res, next) => {
  console.error("Something broke!", error);
  return res
    .status(400)
    .json({ error: error.code, message: `${error.message}` });
};
