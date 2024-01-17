const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
    {
        email: String,
        password: String,
        name: String,
        dateOfBirth: Date,
        courses: [{type: mongoose.Schema.Types.ObjectId, ref: "Course"}]
        // more properties will come by the development of the project
    }
);

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
