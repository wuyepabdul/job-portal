const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const {
  createJobController,
  singleJobController,
  updateJobController,
} = require("../controller/jobController");

const router = express.Router();

router.post("/job/create", isAuthenticated, isAdmin, createJobController);
router.get("/job/:id", singleJobController);
router.put(
  "/job/update/:job_id",
  isAuthenticated,
  isAdmin,
  updateJobController
);

module.exports = router;
