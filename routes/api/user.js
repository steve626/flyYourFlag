const userController = require('../../controllers/user_controllers');
const router = require("express").Router();

//Defaults to /api/users
router.route("/")
    .get(userController.getAllUsers)
    .post(userController.create);

router.route("/MapView/team")
    .get(userController.getUsersByTeam);

router.route("/TeamChooser/addTeam")
  .put(userController.addTeamsToUser);

// router.route("/createUser")
//   .post(userController.createUser);



module.exports = router;