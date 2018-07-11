const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fyf_db');

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
=======
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
>>>>>>> ee892a16008d966e84a67b6dc80189bfbc20a513

