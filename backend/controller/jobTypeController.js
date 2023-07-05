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

exports.allJobTypesController = async (req, res) => {
  try {
    const jobTypes = await JobTypeModel.find({});
    return res.status(200).json({ success: true, jobTypes });
  } catch (error) {
    console.log("All jobs error", error.message);
    return res.status(500).json({ error: true, message: "Server error" });
  }
};
