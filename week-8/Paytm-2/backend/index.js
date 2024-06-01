// backend/index.js
const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", rootRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`listening to the server ${port}`);
});
