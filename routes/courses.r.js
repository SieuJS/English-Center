const express = require('express')
const router = express.Router();
const courseController = require("../controllers/course.c.js");

router.get("/", courseController.getAll);
router.get("/:courseId/", courseController.getCourseById);
router.get("/:courseId/assignments", courseController.getCourseAssignments); // get all assignments of a course

module.exports = router;