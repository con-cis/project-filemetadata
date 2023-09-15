import { errorHandler } from "../utilities/errors.js";
import { isValidFile } from "../utilities/isValidFile.js";
/**
 * File Filter Middleware
 *
 * @param {Object} req - The Express.js request object.
 * @param {Object} file - The file object containing information about the uploaded file.
 * @param {Function} cb - The callback function used to determine if the file is valid or not.
 */
export const fileFilterMiddleware = (req, file, cb) => {
  if (isValidFile(file.originalname, file.mimetype)) {
    console.log("File is valid", file.originalname);
    cb(null, true);
  } else {
    console.log("File is invalid", file.originalname);
    cb(errorHandler.invalidFileError);
  }
};
