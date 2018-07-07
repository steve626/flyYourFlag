const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: {
    type: String
  },
  League: {
    type: String
    
  },
  coordinates : {
    type: [number]
  },
  geometry: PointSchema
});

const team = mongoose.model('team', teamSchema);

module.exports = team;