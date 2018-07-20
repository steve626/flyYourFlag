const router = require("express").Router();
const teamRoutes = require("./teams");
const userRoutes = require("./user");

router.use("/teams", teamRoutes);
router.use("/user", userRoutes);

module.exports = router;