const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res
      .status(401)
      .json({ error: true, message: "Not authorized to access this route" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    console.log(error.message);
    return res
      .status(401)
      .json({ error: true, message: "Not authorized to access this route" });
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user.role === 0) {
    return res
      .status(401)
      .json({ error: true, message: "Access denied. You are not an Admin" });
  }
  next();
};
