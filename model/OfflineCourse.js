const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
index:{type:Number, required:true},

  courseId: { type: String, required: true },
  courseName: { type: String, required: true },
  courseImage: { type: String, default: "" },
  description: { type: String },
  syllabusLink: { type: String, required: true },
});

module.exports = mongoose.model("OfflineCourse", CourseSchema);
