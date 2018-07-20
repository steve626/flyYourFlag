const user = require('../models')

module.exports = {
  

  index(req, res, next) {
    const { lng, lat } = req.query;
    const point = {
      type: 'Point',
      coordinates: [parseFloat(lng), parseFloat(lat)]
    };
    user.aggregate([
      {
        $geoNear: {
          near: point,
          spherical: true,
          maxDistance: 200000,
          distanceField: 'dist.calculated'
        }
      }
    ])
    .then((users) => {
      res.send(users);
    })
    .catch(next);
  },

  create: function(req, res) {
    
    console.log('user ' + res);
    console.log('req ' + req);
    user.User
    .create(req.body)
    .then( userModel => res.json(userModel))
    .catch(err => res.status(422).json(err));
  },

  getAllUsers(req, res) {
    user.find(req.query)
      .then(userModel => {
        res.json(userModel);})
      .catch(err => console.log(err));
  },

  getUsersByTeam(req, res) {
    user.find(req.query)
    .where({teams : req.params.team})
    .then(userModel => res.json(userModel))
    .catch(err => res.status(422).json(err));
  },

  addTeamsToUser(res) {
    let userEmail = localStorage.getItem('userNow');
    user.update()
    .where({ email:  userEmail }, { $push: { teams: this.team.name }})
    .then( user => res.status(202).send(user));
  },

  edit(req,res,next) {
    const userId = req.params.id;
    const userProps = req.body;

    user.findByIdAndUpdate({ _id: userId }, userProps)
      .then(() => user.findById({ _id: userId }))
      .then(user => res.send(user))
      .catch(next);
  },

  delete(req, res, next) {
    const userId = req.params.id;
    
    user.findByIdAndRemove({ _id: userId })
    .then( user => res.status(204).send(user))
    .catch(next);
  }
};