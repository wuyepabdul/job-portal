const express = require("express");
const { signinController } = require("../controller/authController");
const router = express.Router();

router.get("/", signinController);

module.exports = router;
