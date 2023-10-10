const AdminRepo = require('../repositories/admin-repo');
const TutorRepo = require('../repositories/tutor-repo');
const StudentRepo = require('../repositories/student-repo');

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
    const {email, password, username, isStudent} = req.body;
    const User = isStudent === "true" ? StudentRepo : TutorRepo;
    const existUser = await User.getOneBy({email})
    if(existUser) {
        return next( new HttpError('Email in use'), 404);
    }
    const newUser = await User.create({
        email, 
        password,
        username
    })
    res.status(201).json(newUser)
}

const signInHandler = async (req,res,next)=>{
    const {email, password} = req.body;
    const USERS = extractRole(email) === "student" ? StudentRepo : TutorRepo;
    const identifierUser = await USERS.getOneBy({email});

    if(!identifierUser) {
        return next (new HttpError('Wrong email'))
    }
    if( !USERS.comparePassword(identifierUser.password,password)){
        return next( new HttpError('Wrong password'))
    }
    res.status(200).json({message : "Login sucessfully"});
}
exports.createUser = createUser;
exports.signInHandler = signInHandler;