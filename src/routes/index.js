const Router = require("express").Router;
const todo = require("./todoRoutes");

const router = Router();

router.use("/todos", todo);

module.exports = router;
