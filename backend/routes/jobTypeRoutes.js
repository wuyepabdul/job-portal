const express = require("express");
const { isAuthenticated } = require("../middleware/auth");
const { createJobTypeController } = require("../controller/jobTypeController");

const router = express.Router();

router.post("/type/create", isAuthenticated, createJobTypeController);

module.exports = router;
