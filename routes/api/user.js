const userController = require('../../controllers/user_controllers');
const router = require("express").Router();

//Defaults to /api/user
router.route("/")
    .get(userController.getAllUsers)
    .post(userController.create);

router.route("/:team")
    .get(userController.getUsersByTeam);

<<<<<<< HEAD
router.route("/:email")
  .put(userController.addTeamsToUser);

router.route("/:email")
    .get(userController.getUsers);

router.route("/:id")
      .put(userController.addUserTeam);

router.route("/:id")
    .get(userController.showUserTeams);

=======
router.route("/email/:email")
    .get(userController.getOneUser)
    .put(userController.addTeamsToUser);
>>>>>>> 26cc2c524e103d984595219019addf58b48501da

// router.route("/:id")
//     .put(userController.addUserTeam)
//     .get(userController.showUserTeams);

module.exports = router;