//NPM module
const router = require("express").Router();

// files
const UserController = require("../controllers/user");

/**user api start */
router.post("/", UserController.create);
router.get("/", UserController.user_list);

module.exports = router;
