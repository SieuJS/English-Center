const mongoose = require("mongoose");

const tutorAssessmentSchema = mongoose.Schema({
    studentId: {type: mongoose.Schema.Types.ObjectId, ref: "Student"},
    tutorId: {type: mongoose.Schema.Types.ObjectId, ref: "Tutor"},
    content: {
        type: String,
        maxlenght: 200
    },
    date: String,
    rating: {
        type: Number,
        default: 0,
        min: 1,
        max: 10
    }
});

const TutorAssessment = mongoose.model("TutorAssessment", tutorAssessmentSchema);
module.exports = TutorAssessment;