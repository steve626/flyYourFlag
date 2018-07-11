const express = require("express");
const os = require("os");
const app = express();
const mongoose = require('mongoose');

let port = process.env.PORT || 3000;

app.use(express.static("dist"));


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/fyf_db'
);
mongoose.connection
  .once('open', ()=> 
    {console.log('connected to teamDB')})
  .on('error', err => {
    console.warn('Warning', err);
  });

app.get("/", (req, res) =>

  res.send({ 'Fly Your Flag is running on': os.hostname()})

);


app.listen(port, () => console.log("Listening on port " + port));

