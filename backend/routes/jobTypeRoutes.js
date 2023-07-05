const express = require("express");
const { isAuthenticated } = require("../middleware/auth");
const { createJobTypeController, allJobTypesController } = require("../controller/jobTypeController");

const router = express.Router();

router.post("/type/create", isAuthenticated, createJobTypeController);
router.post("/type/jobs", isAuthenticated, allJobTypesController);

module.exports = router;
