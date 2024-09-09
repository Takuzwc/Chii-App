const express = require("express");
const userController = require("../controlers/user-register-controller.js");
const router = express.Router();

router.route("/register").post(userController.createUser);

module.exports = router;
