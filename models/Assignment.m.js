const mongoose = require("mongoose");

// Day la bai tap ma tutor giao cho hoc sinh
const assignmentSchema = mongoose.Schema(
    {
        courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        },
        name: String,
        link: String,
        isPastDue: {
            type: Boolean,
            default: false
        },
        deadline: String,
        submissions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Submission"
        }]
    }
);

const Assignment = mongoose.model("Assignment", assignmentSchema);
module.exports = Assignment;
