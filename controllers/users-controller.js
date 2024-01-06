const bcrypt = require("bcrypt");
const Student = require("../models/Student.m");
const Tutor = require("../models/Tutor.m");

const HttpError = require('../models/http-error');
const {validationResult} = require('express-validator');

const extractRole = (email) => {
    const after = email.split("@")[1];
    return after.split(".")[0];
}

const createUser = async (req,res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
       return next (new HttpError('Your input is not valid' , 422))
    }
    const {email, password, name, isStudent} = req.body;
    const User = isStudent === "true" ? Student : Tutor;

    const existUser = await User.findOne({email: email});
    if(existUser) {
        return next( new HttpError('Email in use'), 404);
    }
    const newUser = {
        email, 
        password: await bcrypt.hash(password, 4),
        name
    };
    const signUpResult = await User.create(newUser);
    req.session.userId = signUpResult._id.toString();
    res.status(201).json(signUpResult)
}

const signInHandler = async (req,res,next)=>{
    const {email, password} = req.body;
    const User = extractRole(email) === "student" ? Student : Tutor;
    const identifierUser = await User.findOne({email: email});

    if(!identifierUser) {
        return next (new HttpError('Wrong email'))
    }

    const match = await bcrypt.compare(password, identifierUser.password);
    if(!match){
        return next( new HttpError('Wrong password'))
    }

    req.session.userId = identifierUser._id.toString();
    res.status(200).json({message : "Login sucessfully"});
}
exports.createUser = createUser;
exports.signInHandler = signInHandler;