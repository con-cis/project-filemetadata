import crypto from "crypto";
import { readFileSync } from "fs";
import "dotenv/config";
/**
 * Decrypt Data using AES-256-CBC
 *
 * @param {string} hashedFilename - The filename of the encrypted data to decrypt.
 * @returns {string} - The decrypted data as a UTF-8 encoded string.
 */
export function decryptData(hashedFilename) {
  const encryptionKey = process.env.ENCRYPTION_KEY;

  // Read the IV and encrypted data from the file
  const encryptedDataWithIV = readFileSync(hashedFilename);

  // Split the IV and encrypted data
  const iv = encryptedDataWithIV.subarray(0, 16);
  const encryptedData = encryptedDataWithIV.subarray(16);

  // Create a Decipher object with createDecipheriv()
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(encryptionKey),
    iv
  );

  // Decrypt the data
  const decryptedData = Buffer.concat([
    decipher.update(encryptedData),
    decipher.final(),
  ]);

  return decryptedData.toString("utf8");
}

// Example usage:
// import { decryptData } from './utilities/decryptData.js';
// const decryptedData = decryptData('Hashed Filename');
// console.log('Decrypted Data:', decryptedData);
