const router = require("express").Router();
const teamRoutes = require("./teams");

router.use("/team", teamRoutes);

module.exports = router;