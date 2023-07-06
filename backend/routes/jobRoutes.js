const express = require("express");
const { isAuthenticated } = require("../middleware/auth");
const {
  createJobController,
  singleJobController,
} = require("../controller/jobController");

const router = express.Router();

router.post("/job/create", isAuthenticated, createJobController);
router.get("/job/:id", singleJobController);

module.exports = router;
