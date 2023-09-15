import "dotenv/config";
import { readFileSync } from "fs";
import { parse } from "yaml";
import { fileURLToPath } from "url";
import figlet from "figlet";
import path from "path";

// Check if environment variables exists
if (!(process.env.SALT_HFN && process.env.ENCRYPTION_KEY)) {
  console.error(
    "The .env file does not exist. Please create it with the required environment variables or by running 'npm run generate-keys'."
  );
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configFilePath = path.join(__dirname, "config.yaml");

const colors = {
  fgCyan: "\x1b[36m",
  fgGreen: "\x1b[32m",
  fgYellow: "\x1b[33m",
  underscore: "\x1b[4m",
  reset: "\x1b[0m",
};

let config = {};

try {
  const configFile = readFileSync(configFilePath, "utf8");
  config = parse(configFile);
  if (figlet) {
    const data = readFileSync(path.join("./assets/fonts", "Slant.flf"), "utf8");
    figlet.parseFont("slant", data);
    figlet.text(
      "Metadata Analyzer!",
      {
        font: "slant",
        horizontalLayout: "universal smushing",
        verticalLayout: "controlled smushing",
        width: 90,
        whitespaceBreak: true,
      },
      function (err, text) {
        if (err) {
          console.log("something went wrong...");
          console.dir(err);
          return;
        }
        console.info(text);
      }
    );
  }
  console.info(
    colors.fgGreen + "Allowed file extensions:",
    colors.reset,
    ...config.allowedFileExtensions
  );
  console.info(
    colors.fgGreen + "Allowed MIME types:",
    colors.reset,
    ...config.allowedMimeTypes
  );
  console.info(
    colors.fgGreen + "Upload directory:",
    colors.reset,
    config.uploadDirectory
  );
  console.info(colors.fgGreen + "Port:", colors.reset, config.port);
  console.info(
    colors.fgYellow +
      `Open: ${colors.underscore}http://127.0.0.1:${config.port}`,
    colors.reset
  );
} catch (error) {
  console.error("Error loading config.yaml:", error);
  process.exit(1);
}

export default config;
