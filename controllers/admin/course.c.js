const mongoose = require("mongoose");
const courseModel = require("../../models/Course.m.js");
const studentModel = require("../..//models/Student.m.js");

module.exports = {
    create: async (req, res) => {
        const { name, shortDes, fullDes, price, dateStart, dateEnd } = req.body;

        const newCourse = {
            name,
            shortDes,
            fullDes,
            price,
            dateStart,
            dateEnd
        };

        console.log("newcourse", newCourse);
        const result = await courseModel.create(newCourse);
        res.status(201).json({
            isSuccess: true,
            course: result
        });
    },

    addStudent: async (req, res) => {
        const { courseIdStr, studentIdStr } = req.body;
        const student = await studentModel.findById(studentIdStr);
        if (!student) {
            console.log(`Student with id '${studentIdStr} does not exist'`);
            // call next() to handle the error
            return;
        }
        courseModel.findOne({ "_id": courseIdStr })
            .then((course) => {
                course.students.push(studentIdStr);
                course.save();
                res.json({
                    message: `Student ${studentIdStr} has been added to course ${courseIdStr}`,
                    course_name: course.name
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
}