import dotenv from "dotenv";

dotenv.config({
  path: "./.env.local",
});

const corsOption = {
  origin: [
    `http://${process.env.CLIENT_HOST}`,
    `https://${process.env.CLIENT_HOST}`,
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

export default corsOption;
