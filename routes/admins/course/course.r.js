const express = require('express');
const router = express.Router();
const courseController = require("../../../controllers/admin/course.c.js");

router.post('/create', courseController.create);
router.post('/addstudent', courseController.addStudent);

module.exports = router;