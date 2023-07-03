const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const { allUsersController, singleUserController } = require("../controller/userController");

const router = express.Router();

router.get("/allusers", isAuthenticated, isAdmin, allUsersController);
router.get("/user/:id", isAuthenticated, singleUserController);

module.exports = router;
