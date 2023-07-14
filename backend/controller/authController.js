const { nextTick } = require("process");
const User = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");

const sendTokenResponse = async (user, codeStatus, res) => {
  const token = await user.getJwtToken();
  res
    .status(codeStatus)
    .cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true })
    .json({ success: true, role: user.role });
};

exports.signinController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res
        .status(403)
        .json({ error: true, message: "Email is required" });
    }
    if (!password) {
      return res
        .status(403)
        .json({ error: true, message: "Password is required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ error: true, message: "Invalid credentials" });
    }

    const isMatched = await user.comparePassword(password);
    if (!isMatched) {
      return res
        .status(400)
        .json({ error: true, message: "Invalid credentials" });
    }

    sendTokenResponse(user, 200, res);
  } catch (error) {
    console.log("signin error", error.message);
    return res
      .status(500)
      .json({ error: true, message: `Server error => ${error.message}` });
  }
};

exports.signupController = async (req, res) => {
  const { email } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).json({
      error: true,
      message: "User already exist",
    });
  }
  try {
    const user = await User.create(req.body);
    return res.status(201).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ error: true, message: error.message });
  }
};

exports.logoutController = (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "logged out" });
};

exports.userProfileController = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("user profile error =>", error.message);
    return res.status(500).json({ error: true, message: "Server error" });
  }
};
