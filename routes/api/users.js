const userController = require('../../controllers/user_controllers');
const router = require("express").Router();

//Defaults to /api/users
router.route("/")
    .get(userController.getAllUsers);

router.route("/:team")
    .get(userController.getUsersByTeam)

module.exports = router;