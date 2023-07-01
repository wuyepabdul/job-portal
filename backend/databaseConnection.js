const mongoose = require("mongoose");

module.exports.dbConnection = () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
    console.log("connected to mongo db");
  } catch (error) {
    console.log("db connection error =>, ", error.message);
    return error.message;
  }
};
