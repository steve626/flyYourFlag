const usersController = require('../controllers/users_controllers');
module.exports = (app) => {

// watch for incoming GET to the route http://localhost:3050/api
app.get('/api', usersController.greeting);

app.post('/api/users', usersController.create);

app.put('/api/users/:id', usersController.edit);

app.delete('/api/users/:id', usersController.delete);

app.get('/api/users', usersController.index);
};
