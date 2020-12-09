const express = require("express");
const { signUpUser, login, logout } = require("../controllers/userControllers");
const router = express.Router();

router.route("/signup").post(signUpUser);
router.route("/login").post(login);
router.route("/logout").get(logout);

module.exports = router;
