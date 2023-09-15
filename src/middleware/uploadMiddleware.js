import multer from 'multer';
import { fileFilterMiddleware } from './fileFilterMiddleware.js';
/**
 * Multer Upload Middleware Configuration
 *
 * @param {Function} fileFilter - The file filter middleware function.
 * @param {Function} storage - The storage middleware function.
 * @param {string} fieldName - The name of the field that will be used for file upload.
 */
const uploadMiddleware = multer({
  fileFilter: fileFilterMiddleware,
  storage: multer.memoryStorage(),
}).single('upfile');

export { uploadMiddleware };