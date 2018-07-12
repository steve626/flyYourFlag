const teamController = require('../../controllers/team_controllers');
const userController = require('../../controllers/user_controllers');
module.exports = (app) => {

// watch for incoming GET to the route http://localhost:3050/api
app.get('/api', teamController.greeting);

app.post('/api/team', teamController.create);

app.put('/api/team/:id', teamController.edit);

app.delete('/api/team/:id', teamController.delete);

app.get('/api/team', teamController.index);

app.get('/api', userController.greeting);

app.post('/api/user', userController.create);

app.put('/api/user/:id', userController.edit);

app.delete('/api/user/:id', userController.delete);

app.get('/api/user', userController.index);
};
