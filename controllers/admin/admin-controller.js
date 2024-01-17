const { validationResult } = require('express-validator');
const HttpError = require('../../models/http-error.js');
const bcrypt = require("bcrypt");
const Admin = require("../../models/Admin.m.js");
const secretKey = "123AD23";

const createAdmin = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return next(new HttpError('Your input is not valid' , 422));
    }
    const {email, password, name, key} = req.body;
    if (key != secretKey){
        return next(new HttpError('Your key is invalid!!!', 422));
    }
    // Create acount for admin
    const newAdmin = {
        email,
        password: await bcrypt.hash(password, 4),
        name
    };

    const result = await Admin.create(newAdmin);
    res.status(201).json({
        isSuccess: true,
        adminAccount: result
    });
    //res.status(201).json("ok");
}

const signInHandler = async(req, res, next) => {
    const {email, password} = req.body;
    
    const identifierUser = await Admin.findOne({email: email});

    if(!identifierUser) {
        return next (new HttpError('Wrong email'));
    }

    const match = await bcrypt.compare(password, identifierUser.password);
    if(!match){
        return next( new HttpError('Wrong password'))
    }
    
    req.session.userId = identifierUser._id.toString();
    res.status(200).json({message : "Login sucessfully"});
}

exports.signInHandler = signInHandler;
exports.createAdmin = createAdmin;