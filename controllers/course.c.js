const courseModel = require("../models/Course.m.js");
const HttpErrors = require("../models/http-error.js");

module.exports = {
    getAll: async (req, res, next) => {
        courseModel.find({})
            .then(courses => {
                res.json({
                    total: courses.length,
                    courses : courses.map(course=> course.toObject({getters: true})) 
                })
                })
            .catch(err => {
                next(new HttpErrors("Error occurs when try to get all the courses"), 430);
            })
    },
    getCourseById: async (req, res, next) => {
        const courseId = req.params.courseId;
        console.log("courseID params: ", courseId);
        courseModel.findById(courseId)
            .then(course => {
                if (!course) {
                    {
                        next(new HttpErrors("Invalid course id. Can not get specific course", 440));
                        return;
                    }
                }
                res.json(course);
            })
    },
    getCourseAssignments: async (req, res, next) => {
        const courseId = req.params.courseId;
        courseModel.findById(courseId)
            .populate("assignments")
            .then(result => {
                res.status(201).json({
                    total: result.assignments.length,
                    assignments: result.assignments
                })
            })
    }
}