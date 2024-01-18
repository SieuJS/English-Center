const HttpError = require("../models/http-error");
const courseModel = require("../models/Course.m");
const studentModel = require("../models/Student.m");
const tutorModel = require("../models/Tutor.m");
const tutorAssessmentModel = require("../models/TutorAssessment.m");
const AssignmentModel = require("../models/Assignment.m");
const { mongo, default: mongoose } = require("mongoose");

module.exports = {
    addAssignment: async (req, res, next) => {
        const {courseId, name, link, deadline} = req.body;
        const course = await courseModel.findById(courseId);
        if (!course) {
            next (new HttpError("Cannot add assignment. Invalid course id", 440));
            return;
        }
        const newAssignment = {
            courseId,
            name,
            link,
            deadline
        };
        const result = await AssignmentModel.create(newAssignment);
        await course.assignments.push(result._id);
        course.save();
        res.status(201).json({
            newAssignment
        })
    },
    deleteAssignment: async (req, res, next) => {
        const {courseId, assignmentId} = req.body;
        const course = await courseModel.findById(courseId);
        if (!course) {
            next (new HttpError("Cannot delete assignment. Invalid course id", 440));
            return;
        }
        course.assignments = course.assignments.filter(a_ID => a_ID != assignmentId);
        course.save();
        const result = await AssignmentModel.deleteOne({"_id": assignmentId});
        res.json({
            delete: "Done",
            result
        })
    }
}