const express = require("express");
const { isAuthenticated } = require("../middleware/auth");
const { createJobController } = require("../controller/jobController");

const router = express.Router();

router.post("/job/create", isAuthenticated, createJobController);

module.exports = router;
