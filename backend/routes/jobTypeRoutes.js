const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const {
  createJobTypeController,
  allJobTypesController,
  updateJobTypeController,
} = require("../controller/jobTypeController");

const router = express.Router();

router.post("/type/create", isAuthenticated, createJobTypeController);
router.post("/type/jobs", isAuthenticated, allJobTypesController);
router.put(
  "/type/update/:type_id",
  isAuthenticated,
  isAdmin,
  updateJobTypeController
);
module.exports = router;
