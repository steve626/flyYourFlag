const team = require('../models/team')


module.exports = {
  
  findAll(req, res) {
    team.find(req.query)
    .then(teamModel => res.json(teamModel))
    .catch(err => res.status(422).json(err));
  },

  create(req, res, next) {
    const teamProps = req.body;

    team.create(teamProps)
      .then(team => res.send(team))
      .catch(next);
    //console.log(req.body);
    
  },

  edit(req,res,next) {
    const teamId = req.params.id;
    const teamProps = req.body;

    team.findByIdAndUpdate({ _id: teamId }, teamProps)
      .then(() => team.findById({ _id: teamId }))
      .then(team => res.send(team))
      .catch(next);
  },

  delete(req, res, next) {
    const teamId = req.params.id;
    
    team.findByIdAndRemove({ _id: teamId })
    .then( team => res.status(204).send(team))
    .catch(next);
  }
};