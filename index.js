const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hi this is The root ");
});
const port = 3000;
let todo = ["Eat"];
app.get("/todos", (req, res) => {
  res.send("hii mihir here ");
});
app.post("/todos", (req, res) => {
  let newTodo = req.body;
  console.log(newTodo);
  todo.push(newTodo);
  res.status(201).json(newTodo);
});
app.listen(port, () => {
  console.log("Listening to the sever", port);
});
