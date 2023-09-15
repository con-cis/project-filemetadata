import express from "express";
import multer from "multer";
import { hashFilenameWithSalt } from "../utilities/hashFilename.js";
import { encryptData } from '../utilities/encryptData.js';
import { errorHandler } from "../utilities/errors.js";
import { uploadMiddleware } from '../middleware/uploadMiddleware.js';

const router = express.Router();

// Define the '/api/fileanalyse' POST route
router.post("/api/fileanalyse", (req, res, next) => {
  uploadMiddleware(req, res, (err) => {
    if (err) {
      err instanceof multer.MulterError
        ? next(errorHandler.internalError)
        : next(err);
    } else if (req.file === undefined) {
      next(errorHandler.noFileError);
    } else {
      encryptData(req.file.buffer, hashFilenameWithSalt(req.file.originalname));
      res.status(201).json({
        name: req.file.originalname,
        hfn: hashFilenameWithSalt(req.file.originalname),
        type: req.file.mimetype,
        size: parseInt(req.headers["content-length"]),
      });
    }
  });
});

export default router;
