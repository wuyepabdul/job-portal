const JobTypeModel = require("../models/jobTypeModel");

exports.createJobTypeController = async (req, res) => {
  try {
    const jobType = await JobTypeModel.create({
      jobTypeName: req.body.jobTypeName,
      user: req.user.id,
    });

    return res.status(201).json({ success: true, jobType });
  } catch (error) {
    console.log("Create job error", error.message);
    return res.status(500).json({ error: true, message: "Server error" });
  }
};
