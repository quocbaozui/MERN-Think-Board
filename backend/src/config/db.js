const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected DB");
  } catch (error) {
    console.error("Error to connect MongooseDB", error);
    process.exit(1); // exit with failure
  }
};

module.exports = connectDB;
