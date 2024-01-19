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
        let course
        try{
        course = await courseModel.findById(courseId)
        }
        catch (err){
            return next(new HttpErrors("Could not find with id"), 404)
        }
        if (!course) {
            return next(new HttpErrors("Could not find with id"), 404)
        }
        res.json({course : course.toObject({getters : true})})
        
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