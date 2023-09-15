import "dotenv/config";
import crypto from "crypto";
import { saveFile } from "./saveFile.js";
import config from "../config/config.js";
/**
 * Encrypt Data using AES-256-CBC and save it to a file.
 *
 * @param {string|Buffer} data - The data to be encrypted, either as a string or a Buffer.
 * @param {string} hashedFilename - The filename to save the encrypted data with.
 * @returns {Promise<void>} - A Promise that resolves when the data is encrypted and saved to a file.
 */
export async function encryptData(data, hashedFilename) {
  const encryptionKey = process.env.ENCRYPTION_KEY;

  // Generate a random initialization vector (IV)
  const iv = crypto.randomBytes(16);

  // Create a Cipher object with createCipheriv()
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(encryptionKey),
    iv
  );

  // Encrypt the data
  const encryptedData = Buffer.concat([
    cipher.update(data, "utf8"),
    cipher.final(),
  ]);

  const encryptedDataWithIV = Buffer.concat([iv, encryptedData]);

  // Save the IV and encrypted data to a file
  const filePath = config.uploadDirectory ?? "./uploads";

  await saveFile(filePath, hashedFilename, encryptedDataWithIV);
}
// Example usage:
// import { encryptData } from './utilities/encryptData.js';
// encryptData('Sensitive data to be encrypted', 'Hashed Filename');
