const app = require("./O1-middleware");

const request = require("supertest");
const assert = require("assert");
describe("GET /user", function () {
  it("One request responds with 1", function (done) {
    request(app)
      .get("/requestCount")
      .then((response) => {
        expect(response.body.reqCount).toBe(1);
        done();
      });
  });

  it("10 more requests log 12", function (done) {
    for (let i = 0; i < 10; i++) {
      request(app).get("/user").then();
    }
    request(app)
      .get("/requestCount")
      .then((response) => {
        expect(response.body.reqCount).toBe(12);
        done();
      });
  });
});
