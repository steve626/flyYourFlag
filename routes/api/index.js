const router = require("express").Router();
const teamRoutes = require("./teams");
const userRoutes = require("./users");

router.use("/team", teamRoutes);
router.use("/users", userRoutes);

module.exports = router;