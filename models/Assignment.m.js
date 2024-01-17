const mongoose = require("mongoose");

const assignmentSchema = mongoose.Schema(
    {
        name: String,
        deadline: Date,
        link: String,
    }
);

const Assignment = mongoose.model("Course", assignmentSchema);
module.exports = Assignment;
