const User = require("../models/userModel");

exports.allUsersController = async (req, res) => {
  // pagination
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const count = await User.find({}).estimatedDocumentCount();

  try {
    const users = await User.find({})
      .sort({ createdAt: -1 })
      .select("-password")
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    return res.status(200).json({
      success: true,
      users,
      page,
      pages: Math.ceil(count / pageSize),
      count,
    });
  } catch (error) {
    return res.status(500).json({ error: true, message: "Server Error" });
  }
};

exports.singleUserController = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      return res.status(200).json({ success: true, user });
    } else {
      return res.status(404).json({ error: true, message: "User not found" });
    }
  } catch (error) {
    console.log("single user error", error.message);
    return res.status(500).json({ error: true, message: "Server error" });
  }
};
