const HttpError = require("../models/http-error");
const courseModel = require("../models/Course.m");
const studentModel = require("../models/Student.m");

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
    }
}