import request from "supertest";
import app from "../../app.js";
import { dbConnect, dbDisconnect } from "./utils/dbHandler.utils.js";

// const envFile =
//   process.env.NODE_ENV === "production"
//     ? ".env.production"
//     : ".env.development";
// dotenv.config({
//   path: envFile,
// });
// const mongod = await MongoMemoryServer.create();
// /* Connecting to the database before each test. */
// beforeEach(async () => {

//   const uri = mongod.getUri();
//   await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   });
// });

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe("Register", () => {
  it("should create a new user and return 201 status", async () => {
    const res = await request(app).post("/api/auth/register").send({
      firstName: "testuser",
      lastName: "testuserLastName",
      email: "testuser@example.com",
      password: "testWarp123password",
      confirmPassword: "testWarp123password",
    });

    expect(res.statusCode).toEqual(201);
  });
});


// /* Closing database connection after each test. */
// afterEach(async () => {
//   await mongoose.connection.close();
//   await mongod.stop();
// });
