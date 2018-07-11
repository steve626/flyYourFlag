const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const port = process.env.PORT || 3001;

//app.use(express.static("dist"));

//Define middleware here
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
//serve up state assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//add routes, both API and view
app.use(routes);

//connects to MondoDB
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

