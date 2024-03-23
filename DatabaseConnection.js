const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const mongoConnect = () => {
  // mongoose.connect(process.env.OFLINE_DATABASE_CONNECTION);

  mongoose.connect(
    "mongodb+srv://root:ocean-academy-puducherry@oceanacademy.atrtb.mongodb.net/OA_Live_API?minPoolSize=0&maxPoolSize=100"
    // "mongodb+srv://root:root@oceanacademy.atrtb.mongodb.net/OA_Live_API"
  );
};

module.exports = mongoConnect;
