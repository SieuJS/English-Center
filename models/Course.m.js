const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
    {
        // basic info
        name: String,
        shortDes: String,
        fullDes: String,
        price: String,
        dateStart: String,
        dateEnd: String,

        // link with other collections
        tutors: [{
            type: mongoose.Schema.Types.ObjectId, ref: "Tutor"
        }],
        students: [{
            type: mongoose.Schema.Types.ObjectId, ref: "Student"
        }],
        assignments: [{
            type: mongoose.Schema.Types.ObjectId, ref: "Assignment"
        }]
    }
);

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
