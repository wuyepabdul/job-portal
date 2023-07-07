const JobModel = require("../models/jobModel");

exports.createJobController = async (req, res) => {
  try {
    const job = await JobModel.create({
      title: req.body.title,
      description: req.body.description,
      salary: req.body.salary,
      location: req.body.location,
      jobType: req.body.jobType,
      user: req.user.id,
    });

    return res.status(201).json({ success: true, job });
  } catch (error) {
    console.log("Create job error", error.message);
    return res.status(500).json({ error: true, message: "Server error" });
  }
};

exports.singleJobController = async (req, res) => {
  try {
    const job = await JobModel.findById(req.params.id);
    if (job) {
      return res.status(200).json({ success: true, job });
    } else {
      return res.status(404).json({ error: true, message: "Job not found" });
    }
  } catch (error) {
    console.log("get single job error", error.message);
    return res.status(500).json({ error: true, message: "Server error" });
  }
};

exports.updateJobController = async (req, res) => {
  try {
    const updatedJob = await JobModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
      .populate("jobType", "jobTypeName")
      .populate("user", "firstName lastName");
    if (updatedJob) {
      return res.status(200).json({ success: true, updatedJob });
    } else {
      return res
        .status(400)
        .json({ error: true, message: "Error occured updating job" });
    }
  } catch (error) {
    console.log("update job error", error.message);
    return res.status(500).json({ error: true, message: "Server error" });
  }
};

exports.showJobsController = async (req, res) => {
  // pagination
  const pageSize = 5;
  const page = Number(req.query.pageNumber) || 1;
  const count = await Job.find({}).estimatedDocumentCount();
  try {
    const jobs = await JobModel.find({})
      .skip(pageSize * (page - 1))
      .limit(pageSize);
      
    return res.status(200).json({
      success: true,
      jobs,
      page,
      pages: Math.ceil(count / pageSize),
      count,
    });
  } catch (error) {
    console.log("update job error", error.message);
    return res.status(500).json({ error: true, message: "Server error" });
  }
};
