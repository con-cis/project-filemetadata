import "dotenv/config";
import express from "express";
import cors from "cors";
import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware.js";
import fileRoutes from "./routes/fileRoutes.js";
import config from "./config/config.js";

const app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Use the fileRoutes module for file-related routes
app.use(fileRoutes);

app.use(errorHandlerMiddleware);

const port = config.port || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
