const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const mentorSchema = mongoose.Schema({
  index: { type: Number, required: true },
  mentorName: { type: String, required: true },
  profilePicture: { type: String },
  designation: { type: String },
  gmail: { type: String },
  facebook: { type: String },
  linkedIn: { type: String },
  twitter: { type: String },
});

module.exports = mongoose.model("Mentor", mentorSchema);
