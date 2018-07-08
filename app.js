const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test'){
  before((done) => 
mongoose.connect('mongodb://localhost/fyf_teams_db')
    .once('open', () => {console.log('connected to teamDB'), done();})
    .on('error', (error) => {
      console.log('warning: ', error);
    })
)};

//always add bodyParser before calling app
app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
