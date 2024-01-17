const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Student = require("../models/Student.m");
const Tutor = require("../models/Tutor.m");

require('dotenv').config();

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
    let signUpResult
    try {
        signUpResult = await User.create(newUser);
    }
    catch (err) {
        return next (new HttpError ('Can not sign up', 500));
    }
    
    try {
        jwt.sign(
            {
                userId : newUser.id,
                email : newUser.email,
                role 
            }
        )
    }catch (err) {
        return next (new HttpError ('Can not sign up', 500));
    }
    
    res.status(201).json(signUpResult)
}

const signInHandler = async (req,res,next)=>{
    const {email, password} = req.body;
    const role = extractRole(email);
    const User = role === "student" ? Student : Tutor;
    const identifierUser = await User.findOne({email: email});

    if(!identifierUser) {
        return next (new HttpError('Wrong email',420))
    }

    const match = await bcrypt.compare(password, identifierUser.password);
    if(!match){
        return next( new HttpError('Wrong password', 420))
    }

    try {
        jwt.sign(
            {
                userId : identifierUser.id,
                email : identifierUser.email,
                role 
            },
            process.env.JWT_KEY,
            {expiresIn : "1h"}
        )
    }
    catch (err ) {
        return next( new HttpError('Can not login', 510))
    }

    req.session.userId = identifierUser._id.toString();
    res.status(200).json(
        {
            message : "Login sucessfully" ,  
            user : {
                ...identifierUser ,
                role : extractRole(email)
            }
    });
}
exports.createUser = createUser;
exports.signInHandler = signInHandler;