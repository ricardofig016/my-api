import express from "express";
import dotenv from "dotenv";
import { requestLogger } from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// parse JSON bodies
app.use(express.json());

// middleware
app.use(requestLogger);
app.use(errorHandler);

// routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
