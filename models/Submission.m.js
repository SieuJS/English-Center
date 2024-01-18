const mongoose = require("mongoose");

// Day la bai tap ma hoc sinh nop
const submissionSchema = mongoose.Schema(
    {
        assignmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Assignment"
        },
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
        },
        grade: {
            type: Number,
            min: 0,
            max: 10,
            default: 0
        },
        link: String,
        graded: {
            type: Boolean,
            default: false
        }
    }
);

const Submission = mongoose.model("Submission", submissionSchema);
module.exports = Submission;
