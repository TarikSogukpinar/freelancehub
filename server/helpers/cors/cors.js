import cors from "cors";

const initCors = (app) => {
  app.use(
    cors({
      origin: ["*", `http://localhost:8080`, `https://localhost:8080/`],
      methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
      credentials: true,
    })
  );
};

export default initCors;
