const express = require("express");
const router = express.Router();
const tutorController = require("../controllers/tutor.c.js");

router.post("/addassignment", tutorController.addAssignment);

module.exports = router;