const courseModel = require("../models/Course.m.js");
const HttpErrors = require("../models/http-error.js");

module.exports = {
    getAll: async (req, res, next) => {
        courseModel.find({})
            .then(courses => {
                res.json({
                    total: courses.length,
                    courses
                });
            })
            .catch(err => {
                next(new HttpErrors("Error occurs when try to get all the courses"), 430);
            })
    }
}