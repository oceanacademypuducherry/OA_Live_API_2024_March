const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
  index: { type: Number, required: true },
  courseId: { type: String, required: true },
  courseName: { type: String, required: true },
  price: { type: Number, required: true },
  courseImage: { type: String, default: "" },
  duration: { type: Number, default: 90 },
  description: String,
  syllabus: Array,
});

module.exports = mongoose.model("Course", CourseSchema);
