const mongoose = require("mongoose");

module.exports.dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongo db");
  } catch (error) {
    console.log("db connection error =>, ", error.message);
    return error.message;
  }
};
