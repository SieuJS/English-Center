const express = require('express')
const router = express.Router();
const courseController = require("../controllers/course.c.js");

router.get("/", courseController.getAll);

module.exports = router;