const router = require("express").Router();
const teamRoutes = require("./teams");

router.use("/teams", teamRoutes);

module.exports = router;