//npm packages

import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cookieParser from "cookie-parser";

//Custom Modules, Packages, Configs, Etc
import connectionDatabase from "./helpers/connectionDatabase/connectionDatabase.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running PORT : ${PORT}`);
  await connectionDatabase();
});
