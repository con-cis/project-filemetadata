import "dotenv/config";
import { createHash } from "crypto";
/**
 * Hash a Filename with a Salt using SHA-256.
 *
 * @param {string} filename - The original filename to be hashed.
 * @returns {string} - The hashed filename as a hexadecimal string.
 */
export function hashFilenameWithSalt(filename) {
  const salt = process.env.SALT;
  console.log(crypto.randomBytes(16).toString("hex"));
  const combinedData = salt + filename;
  const hashedData = createHash("sha256").update(combinedData).digest("hex");
  return hashedData;
}

// Example usage:
// import { hashFilenameWithSalt } from './utilities/hashFilename.js';
// hashFilenameWithSalt('Original Filename');
