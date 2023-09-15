import config from "../config/config.js";

const errorMessages = {
  noFileError: "No file provided.",
  invalidFileError: config?.allowedFileExtensions
    ? `File upload only supports the following filetypes - ${config.allowedFileExtensions}`
    : "No file extensions or mimetypes provided",
  internalError: "Internal error",
};

export const errorHandler = {
  noFileError: {
    code: -1001,
    message: new Error(errorMessages.noFileError),
  },
  invalidFileError: {
    code: -1002,
    message: new Error(errorMessages.invalidFileError),
  },
  internalError: {
    code: -1003,
    message: new Error(errorMessages.internalError),
  },
};
