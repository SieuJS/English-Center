const courseModel = require("../../models/Course.m.js");

module.exports = {
    create: async (req, res) => {
        const {name, shortDes, fullDes, price, dateStart, dateEnd} = req.body;
        
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
        const {courseId, studentId} = req.body;
        courseModel.findOne({_id: courseId}, (err, course) => {
            if (err) {
                console.log(err);
                return;
            }

            course.students.push(studentId);
            course.save((err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(`Add new student to course ${courseId}`);
            });
        });
    }
}