const express = require("express");
const app = express();
let reqCount = 0;

app.use(express.json());
app.use((req, res, next) => {
  reqCount++;
  next();
});

app.get("/user", (req, res) => {
  res.status(200).json({
    name: "Mihir",
  });
});
app.post("/user", (req, res) => {
  res.status(200).json({
    msg: "created dummy user",
  });
});
app.get("/requestCount", (req, res) => {
  res.status(200).json({ reqCount });
});

app.listen(3000);
module.exports = app;
