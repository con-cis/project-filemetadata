import { promises as fsPromises } from "fs";
import path from "path";
/**
 * Save the IV and encrypted data to a file.
 *
 * @param {string} filePath - The path where the file will be saved.
 * @param {string} hashedFilename - The filename to save the encrypted data with.
 * @param {Buffer} encryptedDataWithIV - The encrypted data concatenated with the IV.
 * @returns {Promise<void>} - A Promise that resolves when the data saved to a file.

 */
export async function saveFile(filePath, hashedFilename, encryptedDataWithIV) {
  try {
    await fsPromises.mkdir(filePath, { recursive: true });
    const fullPath = path.join(filePath, hashedFilename);
    await fsPromises.writeFile(fullPath, encryptedDataWithIV);
    console.log(`File saved at: ${fullPath}`);
  } catch (error) {
    console.error("Error saving file:", error);
  }
}
