import cors from "cors";

const initCors = (app) => {
  app.use(
    cors({
      origin: [`http://localhost:3000/`],
      methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
      credentials: true,
    })
  );
};

export default initCors;
