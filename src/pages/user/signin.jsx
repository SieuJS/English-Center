import * as React from 'react'
import Input from '../../components/shared/FormElements/input'
import {VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from "../../utils/validators"
import {useForm} from '../../hooks/form-hook'

import Button from '../../components/shared/FormElements/button'

// css
import "./signin.css"


export default function SignIn (props) {
    const [formState, inputHandler, setFormData] = useForm( 
    {
        email : {
        value : '',
        isValid : false
        },

        password : {
            value : '',
            isValid : false
        },
    }, false
    )
    return (
        <div className="container-fluid r" id = "form-container">
        <form className='signin-form'>
            <div className="form-heading">
            <h3 >Đăng nhập</h3>
            <p>Học Tieng Anh tại HighFiveEnglish </p>
            </div>
        <Input
            element = "input"
            id = "email"
            type = "text"
            lable = "Email"
            validators = {[VALIDATOR_EMAIL()]}
            errorText = "Please enter a valid email."
            onInput = {inputHandler}
        />
        <Input
            element = "input"
            id = "password"
            type = "password"
            lable = "password"
            validators = {[VALIDATOR_MINLENGTH(6)]}
            errorText = "Please enter a valid password."
            onInput = {inputHandler}
        />

        <div className="suggest-signup d-flex justify-content-center gap-3">
              <span>Bạn chưa có tài khoản? </span>
              <a href="./signup.html" style={{textDecoration : "none"}}>Đăng ký</a>  
        </div>
        <div className="submit d-flex justify-content-center">
        <Button type = "submit" disabled = {!formState.isValid} className='btn btn-submit' primary>Đăng nhập</Button >
        </div>

    </form>
    </div>
    )
}

