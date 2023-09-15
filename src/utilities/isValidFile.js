import { extname } from "path";
import config from "../config/config.js";
/**
 * Check if a File is Valid based on its Filename and MIME Type.
 *
 * @param {string} filename - The name of the file including its extension.
 * @param {string} mimetype - The MIME type of the file.
 * @returns {boolean} - `true` if the file is valid; otherwise, `false`.
 */
function isValidFile(filename, mimetype) {
  const fileExtension = extname(filename).toLowerCase();
  const isAllowedExtension =
    config.allowedFileExtensions?.includes(fileExtension) ?? false;
  const isAllowedMimeType =
    config.allowedMimeTypes?.includes(mimetype) ?? false;
  return isAllowedExtension && isAllowedMimeType;
}

export { isValidFile };
