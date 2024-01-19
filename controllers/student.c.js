const HttpError = require("../models/http-error");
const courseModel = require("../models/Course.m");
const studentModel = require("../models/Student.m");
const tutorModel = require("../models/Tutor.m");
const tutorAssessmentModel = require("../models/TutorAssessment.m"); 

module.exports = {
    registerCourse: async (req, res, next) => {
        const {studentId, courseId} = req.body;
        if (!studentId || !courseId) {
            next (new HttpError("Can not register. You need to provide both student id and course id", 440));
            return;
        }
        const course = await courseModel.findById(courseId);
        if(!course) {
            next (new HttpError("Can not register. The course is invalid", 440));
            return;
        }
        studentModel.findById(studentId)
            .then(student => {
                if (!student) {
                    next (new HttpError("Can not register, the student does not exist", 440));
                    return;
                }

                if (student.courses.includes(courseId)) {
                    next(new HttpError("Student has registered the course", 440));
                    return;
                }

                student.courses.push(courseId);
                course.students.push(studentId);
                course.save();
                student.save();
                res.json({
                    message: `Student ${studentId} registers course ${courseId} successfully`
                })
            })
            .catch(err => {
                next(new HttpError("Error when student try to register a course", 440));
            })
    },
    assessTutor: async (req, res, next) => {
        const {studentId, tutorId, content, date, rating} = req.body;
        const student = await studentModel.findById(studentId);
        const tutor = await tutorModel.findById(tutorId);
        if (!student) {
            next(new HttpError("Cannot assess. Invalid student"), 440);
            return;    
        }
        if (!tutor) {
            next(new HttpError("Cannot assess. Invalid tutor"), 440);
            return;    
        }
        const ratingNum = parseInt(rating);
        if (ratingNum < 1 || ratingNum > 10) {
            next(new HttpError("Cannot assess. Rating must be in range 1 to 10", 440));
            return;
        }
        const newAssessment = {
            studentId,
            tutorId,
            content,
            date,
            rating: ratingNum
        }
        tutorAssessmentModel.create(newAssessment)
            .then(result => {
                res.status(201).json({
                    isSuccess: true,
                    assessment: result
                })
            })
            .catch(error => {
                next(new HttpError("Error trying to create new tutor assessment"), 440);
            })
    },
    getCourses: async (req, res, next) => {
        const {studentId} = req.body;
        studentModel.findOne({"_id": studentId})
            .populate("courses", "name shortDes dateStart dateEnd")
            .then((result) => {
                //console.log("result populate", result.courses);
                res.json({
                    total: result.courses.length,
                    courses: result.courses
                });
            })
            .catch(err => {
                next(new HttpError("Can not get course for specific student"), 440);
            })
    }
}