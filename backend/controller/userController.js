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
    const user = await User.findById(req.params.id).select("-password");
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

exports.editUserController = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res
      .status(201)
      .json({ success: true, user, message: "User Updated Successfully" });
  } catch (error) {
    console.log("edit user error", error.message);
    return res.status(500).json({ error: true, message: "Server error" });
  }
};

exports.deleteUserController = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    return res
      .status(200)
      .json({ success: true, user, message: "User Deleted Successfully" });
  } catch (error) {
    console.log("Delete user error", error.message);
    return res.status(500).json({ error: true, message: "Server error" });
  }
};

exports.createUserJobsHistory = async (req, res) => {
  const { title, description, salary, location } = req.body;

  try {
    const currentUser = await User.findOne({ _id: req.user._id });
    if (!currentUser) {
      return res
        .status(401)
        .json({ error: true, message: "Unauthorized request. Please login" });
    } else {
      const addJobHistory = {
        title,
        description,
        salary,
        location,
        user: req.user._id,
      };
      currentUser.jobsHistroy.push(addJobHistory);
      await currentUser.save();
      return res.status(200).json({ success: true, currentUser });
    }
  } catch (error) {
    console.log("Delete user error", error.message);
    return res.status(500).json({ error: true, message: "Server error" });
  }
};
