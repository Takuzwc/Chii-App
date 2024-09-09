const express = require("express");
const userController = require("../controlers/user-login-controler.js");
const router = express.Router();

router.route("/login").post(userController.verifyLogin);

module.exports = router;
