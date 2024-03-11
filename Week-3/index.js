const express = require("express");
const app = express();

let numberOfReq = 0;
function calculateReq(req, res, next) {
  numberOfReq++;
  console.log(numberOfReq);
  next();
}
app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;
  if (!(username != "harkirat" || password != "pass")) {
    res.status(400).json({
      msg: "something went wrong ",
    });
    return;
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.json({
      msg: "something wrong in input  ",
    });
  }
  res.json({
    msg: "Your kidney is fine ",
  });
});

app.get("/home1", calculateReq, (req, res) => {
  res.send("Hi from home 1");
});

app.get("/home2", calculateReq, (req, res) => {
  res.send("Hi from home 2");
});
app.listen(3000, () => {
  console.log("Listing to port ", 3000);
});
