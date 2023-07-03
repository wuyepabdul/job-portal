const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const {
  allUsersController,
  singleUserController,
  editUserController,
  deleteUserController,
} = require("../controller/userController");

const router = express.Router();

router.get("/allusers", isAuthenticated, isAdmin, allUsersController);
router.get("/user/:id", isAuthenticated, singleUserController);
router.put("/user/edit/:id", isAuthenticated, editUserController);
router.delete(
  "/admin/user/delete/:id",
  isAuthenticated,
  isAdmin,
  deleteUserController
);

module.exports = router;
