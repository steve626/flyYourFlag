const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var teamDB = 'mongodb://127.0.0.1/fyf_team_db'

mongoose.connect(teamDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error'));

const PointSchema = new Schema({
  type: { type: String, default: 'Point'},
  coordinates: {type: [Number], index: '2dshpere'}
});

const teamSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  League: {
    type: String    
  },
  geometry: PointSchema
});

const team = mongoose.model('team', teamSchema);

module.exports = team;