const userController = require('../../controllers/user_controllers');
const router = require("express").Router();

//Defaults to /api/users
router.route("/")
    .get(userController.getAllUsers);

module.exports = router;