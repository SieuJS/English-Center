const mongoose = require("mongoose");

const tutorSchema = mongoose.Schema(
    {
        email: String,
        password: String,
        name: String,
        dateOfBirth: Date,
        // more properties will come by the development of the project
    }
);

const Tutor = mongoose.model("Tutor", tutorSchema);
module.exports = Tutor;
