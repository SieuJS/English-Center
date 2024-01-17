const express = require('express');
const {check} = require('express-validator');
const router = express.Router();
const courseRoute = require("./course/course.r.js");

const { createAdmin, signInHandler} = require('../../controllers/admin/admin-controller')

/** Sign in, sign up */
router.post('/signup',[
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min: 6})
], createAdmin);
router.post('/signin',[
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min: 6})
], signInHandler);

/** Course management routes */
router.use("/course", courseRoute);

module.exports = router;