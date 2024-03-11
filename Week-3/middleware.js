const express = require("express");
const app = express();
const zod = require("zod");
const schema = zod.array(zod.number());

const schema2 = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: zod.literal("IN").or(zod.literal("IN")),
  kidney: zod.array(zod.number()),
});

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  let kidneys = req.body.kidneys;
  let response = schema.safeParse(kidneys);
  res.send(response);
});
// -------- Global Catcher --------
app.use((err, req, res, next) => {
  console.log(err);
  res.json({
    msg: "Wrong Input ",
  });
});
app.listen(3000, () => {
  console.log("Listing to port ", 3000);
});
