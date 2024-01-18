const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.c.js");

router.post("/registercourse", studentController.registerCourse);

module.exports = router;