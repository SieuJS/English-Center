import React, {useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'

import Input from '../../components/shared/FormElements/input'
import {VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_COMPARE_STR} from "../../utils/validators"
import {useForm} from '../../hooks/form-hook'

import Button from '../../components/shared/FormElements/button'
import CheckBox from '../../components/shared/FormElements/checkBox'

import { AuthContext } from '../../shared/context/auth-context'

// css
import "./signup.css"


export default function SignUp (props) {

    const auth = useContext(AuthContext);

    const [formState, inputHandler, setFormData] = useForm( 
    {
        email : {
        value : '',
        isValid : false
        },
        username : {
            value : '',
            isValid: false
        },
        password : {
            value : '',
            isValid : false
        },
        repassword : {
            value : '',
            isValid : false
        },
        role : {
            value : "",
            isValid : false
        }
        
    }, false
    )

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    }
    
    return (
        <div className="container-fluid r" id = "form-container">
        <form className='signin-form'>
            <div className="form-heading">
            <h3 >Đăng ký tài khoản</h3>
            <p>Học Tieng Anh tại HighFiveEnglish </p>
            </div>
        
        <CheckBox
            id = "role"
            title = "Bạn là:"
            options = {[
                {label :"Học sinh", value : "student"}, {label : "Giáo viên" , value : "teacher"}]}
            defaultValue  = {formState.inputs.role.value}
            onInput = {inputHandler}
        />

        <Input
            element = "input"
            id = "email"
            type = "text"
            lable = "Email"
            validators = {[VALIDATOR_REQUIRE(),VALIDATOR_EMAIL()]}
            errorText =  { {
                "EMAIL": "Vui lòng nhập đúng định dạng của một email",
                "REQUIRE" : "Ô này không được để trống"
            }}
            onInput = {inputHandler}
        />
        <Input
            element = "input"
            id = "username"
            type = "text"
            lable = "Tên người dùng"
            validators = {[VALIDATOR_REQUIRE()]}
            errorText =  { {
                "REQUIRE" : "Ô này không được để trống"
            }}
            onInput = {inputHandler}
        />
        <Input
            element = "input"
            id = "password"
            type = "password"
            lable = "Mật khẩu"
            validators = {[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(6),VALIDATOR_COMPARE_STR(formState.inputs.repassword.value)]}
            onInput = {inputHandler}
            errorText = {{
                "REQUIRE" : "Ô này không được để trống",
                'MINLENGTH' : `Mật khẩu phải có độ dài lớn hơn ${6}`,
                "COMPARE_STR" : "Mật khẩu không trùng khớp"
            }}
            listenTo = {{
                ele :formState.inputs.repassword.value ,
                triggers:[VALIDATOR_COMPARE_STR(formState.inputs.repassword.value)]
            }}
        />
        <Input
            element = "input"
            id = "repassword"
            type = "password"
            lable = "Nhập lại mật khẩu"
            validators = {[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(6), VALIDATOR_COMPARE_STR(formState.inputs.password.value)]}
            errorText = {{
                "REQUIRE" : "Ô này không được để trống",
                'MINLENGTH' : `Mật khẩu phải có độ dài lớn hơn ${6}`,
                "COMPARE_STR" : "Mật khẩu không trùng khớp"
            }}
            onInput = {inputHandler}
            listenTo = {{
                ele :formState.inputs.password.value ,
                triggers:[VALIDATOR_COMPARE_STR(formState.inputs.password.value)]
            }}
        />

        <div className="suggest-signup d-flex justify-content-center gap-3">
              <span>Bạn đã có tài khoản? </span>
              <Link to="/signin" style={{textDecoration : "none"}}>Đăng nhập</Link>    
        </div>
        <div className="submit d-flex justify-content-center">
        <Button type = "submit" 
        disabled = {!formState.isValid} className='btn btn-submit' 
        primary
        onClick = {submitHandler}
        >Đăng ký</Button >
        </div>

    </form>
    </div>
    )
}

