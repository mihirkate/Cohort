const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());
mongoose.connect(
  "mongodb+srv://mihirkate13:mihirkate13@cluster0.ku63uki.mongodb.net/userappnew"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.get("/home", (req, res) => {
  res.send("Hi from Home ");
});
app.post("/signup", async (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;

  const existingUser = await User.findOne({ email: username });

  if (existingUser) {
    return res.status(403).send("user already existed");
  }
  const user = new User({
    name: username,
    email: email,
    password: password,
  });
  user.save();
  res.json({
    msg: "user created successfully ",
  });
});

app.listen(3000);
