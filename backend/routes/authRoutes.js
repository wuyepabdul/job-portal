const express = require("express");
const {
  signinController,
  signupController,
  logoutController,
} = require("../controller/authController");
const router = express.Router();

router.post("/signin", signinController);
router.post("/signup", signupController);
router.get("/logout", logoutController);

module.exports = router;
