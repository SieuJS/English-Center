const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.c.js");

router.post("/registercourse", studentController.registerCourse);
router.post("/assesstutor", studentController.assessTutor);
router.post("/courses", studentController.getCourses);

module.exports = router;