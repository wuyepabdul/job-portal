const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const jwt = require("jsonwebtoken");

const jobsHistorySchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    maxlength: 70,
  },
  description: {
    type: String,
    trim: true,
  },
  salary: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
  },
  interviewDate: { type: Date },
  applicationStatus: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "First Name is required"],
      maxlength: 32,
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "Last Name is required"],
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email is required"],
      unique: true,
      match: [
        /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "Please add a valid email",
      ],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Password is required"],
      minlength: [6, "Password must have at least 6 characters"],
    },
    jobsHistroy: [jobsHistorySchema],
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT_SECRET, { expiresIn: 3600 });
};

module.exports = mongoose.model("User", userSchema);
