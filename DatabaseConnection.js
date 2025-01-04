const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const mongoConnect = () => {
  // mongoose.connect(process.env.OFLINE_DATABASE_CONNECTION);

  try {
    mongoose.connect(
      "mongodb+srv://root:ocean-academy-puducherry@oceanacademy.atrtb.mongodb.net/OA_Live_API?minPoolSize=0&maxPoolSize=100"
      // "mongodb+srv://root:root@oceanacademy.atrtb.mongodb.net/OA_Live_API"
    );
    console.log("db connected");
  } catch (error) {
    console.log(error, "db not connected");
  }
};

module.exports = mongoConnect;
