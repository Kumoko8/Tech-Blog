const router = require("express").Router();

const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");
const postRoutes = require("./postRoutes");
const userRoutes = require("./userRoutes");
const homeRoutes = require("../homeRoutes");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/create", homeRoutes);

module.exports = router;