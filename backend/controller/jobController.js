const JobModel = require("../models/jobModel");

exports.createJobController = async (req, res) => {
  try {
    const job = await JobModel.create({
      title: req.body.title,
      description:req.body.description,
      salary:req.body.salary,
      location:req.body.location,
      jobType:req.body.jobType,
      user: req.user.id,
    });

    return res.status(201).json({ success: true, job });
  } catch (error) {
    console.log("Create job error", error.message);
    return res.status(500).json({ error: true, message: "Server error" });
  }
};
