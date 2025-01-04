const express = require("express");
const router = express.Router();
const verifyToken = require("../../verifyToken");
const DownloadedCourseUser = require("../../model/DownloadedOfflineCourse");
const OfflineCourse = require("../../model/OfflineCourse");
const { Mongoose, default: mongoose } = require("mongoose");
const { myBucket } = require("../../utils/firebaseinitialization");
const { getFilePathFromFirebaseURL } = require("../../utils/firebase_util");

// Get All downloaded Course User
router.get("/", async (req, res) => {
  const downloadeOflineCourse = await DownloadedCourseUser.find();
  res.status(200).json(downloadeOflineCourse);
});

router.post("/add/user/:courseId", async (req, res) => {
  try {
    // Create a new user record in DownloadedCourseUser
    const user = await DownloadedCourseUser.create(req.body);

    // Log the created user for debugging
    console.log("Downloaded Course User Created:", user);

    const { courseId } = req.params;
    console.log(courseId, "this is course id");

    // Find course by ID
    const courseInfo = await OfflineCourse.findOne({
      _id: mongoose.Types.ObjectId(courseId),
    });

    if (!courseInfo) {
      return res.status(404).send({ message: "Course not found" });
    }

    const { syllabusLink, courseName } = courseInfo;
    console.log("Syllabus Link:", syllabusLink);

    if (!syllabusLink) {
      return res.status(400).send({ message: "Syllabus link was not found" });
    }

    const filePath = getFilePathFromFirebaseURL(syllabusLink);
    const file = myBucket.file(filePath);
    const [exists] = await file.exists();
    if (!exists) {
      return res
        .status(404)
        .send({ message: "File not found in Firebase bucket" });
    }

    // Set response headers to force download
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${courseName}.pdf"`
    );
    res.setHeader("Content-Type", "application/pdf"); // Set the content type to PDF

    // Pipe the file directly to the response stream
    file.createReadStream().pipe(res);
  } catch (error) {
    console.error("Error generating download link:", error);
    res.status(500).json({ message: error.message });
  }
});

router.post("/delete/user/", async (req, res) => {
  try {
    const deleteInfo = await DownloadedCourseUser.deleteOne({
      _id: req.body.userId,
    });
    res.status(200).json(deleteInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
