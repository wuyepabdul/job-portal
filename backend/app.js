const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");
const { dbConnection } = require("./databaseConnection");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const jobTypeRoutes = require("./routes/jobTypeRoutes");
const jobRoutes = require(".//routes/jobRoutes");

// db connection
dbConnection();

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(cookieParser());
app.use(cors());

// Routes
app.get("/api", (req, res) => {
  res.send("Welcome to Job Portal API");
});
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", jobTypeRoutes);
app.use("/api", jobRoutes);

// error middleware
app.use(errorHandler);

// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
