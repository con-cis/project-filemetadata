import { writeFileSync, readFileSync, existsSync, chmodSync } from "fs";
import { randomBytes } from "crypto";
import readline from "readline";

const envFilePath = ".env";

// Check if .env file already exists
if (existsSync(envFilePath)) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "The .env file already exists. Do you want to overwrite it? (yes/no): ",
    (answer) => {
      if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
        generateAndWriteEnvFile();
      } else {
        console.log("Operation canceled. .env file was not overwritten.");
      }

      rl.close();
    }
  );
} else {
  generateAndWriteEnvFile();
}

function generateAndWriteEnvFile() {
  // Generate a random encryption key
  const encryptionKey = randomBytes(16).toString("hex");

  // Generate a random salt for password hashing (if needed)
  const salt = randomBytes(16).toString("hex");

  // Create or update the .env file
  const envContent = `SALT_HFN=${salt}\nENCRYPTION_KEY=${encryptionKey}`;

  writeFileSync(envFilePath, envContent, { flag: "w" });

  // Set the right permissions for the .env file (optional)
  try {
    chmodSync(envFilePath, "600"); // Sets read and write permissions only for the owner
  } catch (error) {
    console.error("Error setting file permissions:", error);
  }

  console.info(
    "Encryption Key and Salt have been generated and saved to .env file."
  );
}