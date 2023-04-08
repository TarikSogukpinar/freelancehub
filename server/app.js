//npm packages
import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cookieParser from "cookie-parser";

//Custom Modules, Packages, Configs, Etc
import connectionDatabase from "./helpers/connectionDatabase/connectionDatabase.js";
import { initRoutes } from "./routes/index.routes.js";

dotenv.config({
  path: "./.env.local",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cookieParser());

initRoutes(app);
connectionDatabase();

export const PORT = process.env.PORT || 5000;
export default app;
