const { validationResult } = require('express-validator');
const AdminReposity = require('../repositories/admin-repo');
const HttpError = require('../models/http-error');


const createAdmin = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return next(new HttpError('Your input is not valid' , 422));
    }
    const {email, password, adminName, secretKey} = req.body;
    if (!AdminReposity.validKey(secretKey)){
        return next(new HttpError('Your key is invalid!!!', 422));
    }
    // Create acount for admin 
    const newAdmin = AdminResposity.create({
        email , 
        password,
        adminName
    })
    req.session.AdminId = newAdmin.id;
    return res( {message : `Create new admin success ${newAdmin.adminName}` })
}

const signInHandler = async(req, res, next) => {
    const {email, password} = req.body;
    
    const identifierUser = await AdminReposity.getOneBy({email});

    if(!identifierUser) {
        return next (new HttpError('Wrong email'))
    }
    if( !USERS.comparePassword(identifierUser.password,password)){
        return next( new HttpError('Wrong password'))
    }
    req.session.userId = newUser.id;
    res.status(200).json({message : "Login sucessfully"});
}

exports.signInHandler = signInHandler;
exports.createAdmin = createAdmin;