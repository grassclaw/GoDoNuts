const router = require("express").Router();
const donutRoutes = require("./apiRoutes");

// Donut routes
router.use("/", donutRoutes);

module.exports = router;
