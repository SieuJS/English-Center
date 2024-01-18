const express = require('express');
const router = express.Router();
const courseController = require("../../../controllers/admin/course.c.js");

router.post('/create', courseController.create);
router.post('/addstudent', courseController.addStudent);
router.post('/addtutor', courseController.addTutor);
router.post('/update', courseController.update);
router.post('/deletestudent', courseController.deleteStudent);
//router.post('/deletetutor', courseController.deleteTutor)

module.exports = router;