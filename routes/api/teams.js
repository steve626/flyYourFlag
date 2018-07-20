const teamController = require('../../controllers/team_controllers');
const userController = require('../../controllers/user_controllers');
const router = require("express").Router();

// "/" defaults to /api/team
router.route("/")
    .get(teamController.findAll)
    .post(teamController.create);

router.route("/:league")
    .get(teamController.findbyLeague)
    .get(teamController.getTeamsByLeague);

module.exports = router;

//module.exports = (app) => {

// watch for incoming GET to the route http://localhost:3001/api

//app.get('/', teamController.findAll);

//app.post('/api/team', teamController.create);

//app.put('/api/team/:id', teamController.edit);

//app.delete('/api/team/:id', teamController.delete);

//app.get('/api/team', teamController.index);

//app.get('/api', userController.greeting);

//app.post('/api/user', userController.create);

//app.put('/api/user/:id', userController.edit);

//app.delete('/api/user/:id', userController.delete);

//app.get('/api/user', userController.index);
//};