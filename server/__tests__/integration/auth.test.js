import supertest from "supertest";
import app from "../../integration/app.js";

const base_url = "http://localhost:5000/api/auth";

describe("POST /users", () => {
  describe("given a username and password", () => {
    test("should respond with a 200 status code", async () => {
      const response = await supertest(app).post(`${base_url}/login`).send({
        username: "testuser",
        password: "testpassword",
      });
      expect(response.statusCode).toBe(200);
    });
  });

  describe("when the username and password is missing", () => {});
});
