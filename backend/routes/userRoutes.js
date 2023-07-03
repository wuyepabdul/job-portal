const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const { allUsersController, singleUserController, editUserController } = require("../controller/userController");

const router = express.Router();

router.get("/allusers", isAuthenticated, isAdmin, allUsersController);
router.get("/user/:id", isAuthenticated, singleUserController);
router.put("/user/edit/:id", isAuthenticated, editUserController);

module.exports = router;
