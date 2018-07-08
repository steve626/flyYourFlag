const teamsController = require('../controllers/teams_controllers');
module.exports = (app) => {

// watch for incoming GET to the route http://localhost:3050/api
app.get('/api', teamsController.greeting);

app.post('/api/teams', teamsController.create);

app.put('/api/teams/:id', teamsController.edit);

app.delete('/api/teams/:id', teamsController.delete);

app.get('/api/teams', teamsController.index);
};
