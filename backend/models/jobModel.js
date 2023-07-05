const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Title is required"],
      maxlength: 70,
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Description Name is required"],
    },
    salary: {
      type: String,
      trim: true,
      required: [true, "Salary Name is required"],
    },
    location: {
      type: String,
    },
    available: { type: Boolean, default: true },
    user: { type: ObjectId, ref: "User",required:true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
