const userController = require('../../controllers/user_controllers');
const router = require("express").Router();

//Defaults to /api/user
router.route("/")
    .get(userController.getAllUsers)
    .post(userController.create);

router.route("/:team")
    .get(userController.getUsersByTeam);

router.route("/email/:email")
    .get(userController.getOneUser)
    .put(userController.addTeamsToUser);

// router.route("/:id")
//     .put(userController.addUserTeam)
//     .get(userController.showUserTeams);

module.exports = router;