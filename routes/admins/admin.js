const express = require('express');
const {check} = require('express-validator');
const router = express.Router();

const { createAdmin, signInHandler} = require('../../controllers/admin-controller')

router.post('/signup',[
    check('username').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min: 6})
], createAdmin);
router.post('/signin',[
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min: 6})
], signInHandler);


module.exports = router;