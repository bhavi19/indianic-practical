const express = require("express")
const router = express.Router();
const { getAllUsers, getAllProductsTesting } = require("../Controller/Users")

router.route("/").get(getAllUsers)
router.route("/testing").get(getAllProductsTesting)

module.exports = router;