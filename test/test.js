const request = require("supertest");
const app = require("../server");

describe("GET /", () => {
  it("respond with Landing Page", (done) => {
    request(app).get("/").expect("Landing Page", done);
  })
});