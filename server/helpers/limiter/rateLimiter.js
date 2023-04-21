import rateLimit from "express-rate-limit";

const initLimit = (app) => {
  app.use(
    rateLimit({
      windowMs: 60 * 60 * 1000, // 15 minutes
      max: 20, // limit each IP to 100 requests per windowMs
      standardHeaders: true,
      legacyHeaders: false,
      message: "Too many requests from this IP, please try again after 15 minutes",
    })
  );
};

export default initLimit;
