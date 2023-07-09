const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const {
  createJobTypeController,
  allJobTypesController,
  updateJobTypeController,
  deleteJobTypeController,
} = require("../controller/jobTypeController");

const router = express.Router();

router.post("/type/create", isAuthenticated, createJobTypeController);
router.get("/type/jobs", isAuthenticated, allJobTypesController);
router.put(
  "/type/update/:type_id",
  isAuthenticated,
  isAdmin,
  updateJobTypeController
);
router.delete(
  "/type/delete/:type_id",
  isAuthenticated,
  isAdmin,
  deleteJobTypeController
);
module.exports = router;
