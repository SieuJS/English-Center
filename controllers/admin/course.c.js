const courseModel = require("../../models/Course.m.js");
const studentModel = require("../../models/Student.m.js");
const tutorModel = require("../../models/Tutor.m.js");
const HttpError = require("../../models/http-error.js");

module.exports = {
    create: async (req, res, next) => {
        const { name, shortDes, fullDes, price, dateStart, dateEnd } = req.body;

        const newCourse = {
            name,
            shortDes,
            fullDes,
            price,
            dateStart,
            dateEnd
        };

        //console.log("newcourse", newCourse);
        courseModel.create(newCourse)
            .then(result => {
                res.status(201).json({
                    isSuccess: true,
                    course: result
                });
            })
            .catch(error => {
                next(new HttpError("Error occurs when try to add new course"))
            });
    },

    addStudent: async (req, res, next) => {
        const { courseId, studentId } = req.body;
        const student = await studentModel.findById(studentId);
        if (!student) {
            console.log(`Student with id '${studentId}' does not exist`);
            next(new HttpError(`Student with id '${studentId}' does not exist`));
            return;
        }

        courseModel.findOne({ "_id": courseId })
            .then((course) => {
                // check whether the student has been in the course
                const studentList = course.students;
                let existed = false;
                studentList.forEach(student_ID => {
                    if (studentId == student_ID) {
                        existed = true;
                    }
                })

                if (existed) {
                    next(new HttpError("Cannot add. The student has been existed in the course"), 430);
                    return;
                }

                course.students.push(studentId);
                course.save();

                // we need to reference the course from student
                student.courses.push(courseId);
                student.save();
                res.json({
                    message: `Student ${studentId} has been added to course ${courseId}`,
                    course_name: course.name
                })
            })
            .catch(error => {
                next(new HttpError(`Error occurs when try to add student to the course ${courseId}`));
            })
    },

    addTutor: async (req, res, next) => {
        const { courseId, tutorId } = req.body;
        const tutor = await tutorModel.findById(tutorId);
        if (!tutor) {
            console.log(`Tutor with id '${tutorId} does not exist'`);
            next(new HttpError(`Tutor with id '${tutorId}' does not exist`));
            return;
        }
        courseModel.findOne({ "_id": courseId })
            .then((course) => {
                // check whether the tutor has been in the course
                const tutorList = course.tutors;
                let existed = false;
                tutorList.forEach(tutor_ID => {
                    if (tutorId == tutor_ID) {
                        existed = true;
                    }
                })

                if (existed) {
                    next(new HttpError("Cannot add. The tutor has been existed in the course", 430));
                    return;
                }

                course.tutors.push(tutorId);
                course.save();
                res.json({
                    message: `Tutor ${tutorId} has been added to course ${courseId}`,
                    course_name: course.name
                })
            })
            .catch(error => {
                next(new HttpError(`Error occurs when try to add tutor to the course ${courseId}`));
            })
    },

    deleteStudent: async (req, res, next) => {
        const { courseId, studentId } = req.body;
        const student = await studentModel.findById(studentId);
        if (!student) {
            next(new HttpError("Cannot delete. Invalid student id", 430));
            return;
        }

        courseModel.findById(courseId)
            .then((course) => {
                if (!course) {
                    next(new HttpError("Cannot delete student from course. Invalid course", 430));
                    return;
                }
                if(!course.students.includes(studentId)) {
                    next(new HttpError("The student has not already been in the course", 430));
                    return;
                }
                course.students = course.students.filter(student_ID => student_ID != studentId);
                course.save();

                student.courses = student.courses.filter(course_ID => course_ID != courseId);
                student.save();
                //console.log("course delete student", course);
                res.status(200).json({
                    message: "Detele student from the course successfully"
                })
            })
            .catch(error => {
                next(new HttpError("Catch error when deleting student from course", 430));
            })
    },

    deleteTutor: async (req, res, next) => {
        const { courseId, tutorId } = req.body;
        const tutor = await tutorModel.findById(tutorId);
        if (!tutor) {
            next(new HttpError("Cannot delete. Invalid tutor id", 430));
            return;
        }

        courseModel.findById(courseId)
            .then((course) => {
                if (!course) {
                    next(new HttpError("Cannot delete tutor from course. Invalid course", 430));
                    return;
                }
                if(!course.tutors.includes(tutorId)) {
                    next(new HttpError("The tutor has not already been in the course", 430));
                    return;
                }
                course.tutors = course.tutors.filter(tutor_ID => tutor_ID != tutorId);
                course.save();
                //console.log("course delete student", course);
                res.status(200).json({
                    message: "Detele tutor from the course successfully"
                })
            })
            .catch(error => {
                next(new HttpError("Catch error when deleting tutor from course", 430));
            })
    },

    update: async (req, res, next) => {
        const { courseId, newName, newPrice, newShortDes, newFullDes, newDateStart, newDateEnd } = req.body;

        if (!courseId) {
            next(new HttpError("The course must not be blank", 430));
        }
        if (!newName && !newPrice && !newShortDes && !newFullDes && !newDateStart && !newDateEnd) {
            next(new HttpError("The update function in course controller need to has at least one new field to update", 430));
        }

        // find the course with the provided id
        courseModel.findById(courseId)
            .then(course => {

                if (!course) {
                    next(new HttpError("Invalid course", 430));
                    return;
                }

                // update field which is not 'undefined'
                if (newName)
                    course.name = newName;
                if (newPrice)
                    course.price = newPrice;
                if (newShortDes)
                    course.shortDes = newShortDes;
                if (newFullDes)
                    course.fullDes = newFullDes;
                if (newDateStart)
                    course.dateStart = newDateStart;
                if (newDateEnd)
                    course.dateEnd = newDateEnd;

                course.save();
                res.json({
                    message: "Updated course " + course.name,
                    updated_field: {
                        newName,
                        newShortDes,
                        newFullDes,
                        newPrice,
                        newDateStart,
                        newDateEnd
                    }
                })
            })
            .catch(err => {
                next(new HttpError(`Error occurs when try to update course ${courseId}`));
            });
    }
}