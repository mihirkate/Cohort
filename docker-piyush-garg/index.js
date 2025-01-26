console.log("Hii from docker")
const express = require("express")
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    return res.json({
        msg: "hii from container "
    })
})
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})
