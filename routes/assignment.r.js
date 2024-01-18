const express = require('express')
const router = express.Router();
const assignmentController = require("../controllers/assignment.c.js");

router.get("/:assignmentId", assignmentController.getById);
router.get("/:assignmentId/update", assignmentController.update);
router.get("/:assignmentId/delete", assignmentController.delete);
router.get("/:assignmentId/allsubmissions", assignmentController.getAllSubmissions); // get all submisisons of a specific assignment 
router.post("/:assignmentId/addsubmission", assignmentController.addSubmission);

module.exports = router;