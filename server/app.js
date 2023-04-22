//npm packages
import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import compression from "compression";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";

//Custom Modules, Packages, Configs, Etc
import connectionDatabase from "./helpers/connectionDatabase/connectionDatabase.js";
import { initRoutes } from "./routes/index.routes.js";
import initLimit from "./helpers/limiter/rateLimiter.js";
import initCors from "./helpers/cors/cors.js";
import cors from "cors";

dotenv.config({
  path: "./.env.local",
});

const app = express();

app.use(express.json({ limit: "5kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cookieParser());
app.use(compression());
app.use(mongoSanitize());
app.use(xss());
app.use(cors())

initRoutes(app);
initLimit(app);
// initCors(app);
connectionDatabase();

export const PORT = process.env.PORT || 5000;
export default app;
