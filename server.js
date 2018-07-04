const express = require("express");
const os = require("os");
const app = express();

let port = process.env.PORT || 3000;

app.use(express.static("dist"));

app.get("/", (req, res) =>

  res.send({ 'Fly Your Flag is running on': os.hostname()})

);


app.listen(port, () => console.log("Listening on port" + port));

