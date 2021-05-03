//NPM module
const router = require("express").Router();

// files
const OrganizationController = require("../controllers/organizations");

/**user api start */
router.post("/", OrganizationController.create);
router.get("/", OrganizationController.org_list);

module.exports = router;
