const express = require("express");
const {
  signinController,
  signupController,
  logoutController,
  userProfileController,
} = require("../controller/authController");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();

router.post("/signin", signinController);
router.post("/signup", signupController);
router.get("/logout", logoutController);
router.get("/me", isAuthenticated, userProfileController);

module.exports = router;
