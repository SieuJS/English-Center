const HttpError = require("../models/http-error");
const courseModel = require("../models/Course.m");
const AssignmentModel = require("../models/Assignment.m");
const SubmissionModel = require("../models/Submission.m");
const mongoose = require("mongoose");

module.exports = {
    getById: async (req, res, next) => {
        const assignmentId = req.params.assignmentId;
        AssignmentModel.findById(assignmentId)
            .populate("submissions")
            .then(a => {
                if (!a) {
                    next(new HttpError("Invalid assignment id", 440));
                    return;
                }
                res.json(a);
            })
    },
    update: async (req, res, next) => {
        const assignmentId = req.params.assignmentId;
        const assignment = await AssignmentModel.findById(assignmentId);
        if (!assignment) {
            next (new HttpError("Invalide assignment is. Cannot update", 440));
            return;
        }
        const {newName, newLink, newDeadline} = req.body;
        if (!newName && !newLink && !newDeadline) {
            next (new HttpError("Need to provide at least a new field", 440));
            return;
        }
        if (newName)
            assignment.name = newName;
        if(newLink)
            assignment.link = newLink;
        if(newDeadline)
            assignment.deadline = newDeadline;
        const updatedAssignmnet = await assignment.save();
        res.json({
            message: "Update the assignment successfully",
            new_assignment: updatedAssignmnet
        })
    },
    delete: async (req, res, next) => {
        const assignmentId = req.params.assignmentId;
        const assignment = await AssignmentModel.findById(assignmentId);
        if (!assignment) {
            next(new HttpError("Invalid assignment id. Cannot delete", 440));
            return;
        }
        const submissions = assignment.submissions;
        SubmissionModel.deleteMany({_id: {$in: submissions}})
            .then(result => {
            })
            .catch(err => {
                next (new HttpError("Error occurs when try to delete submissions ref of assignment", 440));
            })

        AssignmentModel.deleteOne({"_id": assignmentId})
            .then(result => {
                res.json({
                    message: "Delete assignment",
                    deleted_assignment: result,
                })
            })
            .catch(err => {
                next(new HttpError("Erorr occurs when try to delete an assignment"));
            })
    },
    addSubmission: async (req, res, next) => {
        const assignmentId = req.params.assignmentId;
        const {studentId, link} = req.body;
        const assignment = await AssignmentModel.findById(assignmentId);
        if (!assignment) {
            next (new HttpError("Invalid assignment id. Cannot add submisison", 440));
            return;
        }
        const newSubmission = {
            assignmentId,
            studentId,
            link
        };
        SubmissionModel.create(newSubmission)
            .then( async result => {
                await assignment.submissions.push(result._id);
                await assignment.save();
                res.json(result);
            })
            .catch(err => {
                next(new HttpError("Error occurs when try to add new submission for an assignment", 440));
            })
    },
    getAllSubmissions: (req, res, next) => {
        const assignmentId = req.params.assignmentId;
        AssignmentModel.findById(assignmentId)
            .populate("submissions")
            .then(result => {
                res.json({
                    total: result.submissions.length,
                    submissions: result.submissions
                });
            })
            .catch(err => {
                next (new HttpError("Error occurs when try to get all submissions of an assignment", 440));
            })
    }
}