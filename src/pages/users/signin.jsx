import React, { useReducer, useEffect, useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";



// import utils
import {VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_COMPARE_STR} from "../../utils/validators"

// css
import "./signin.css"

import { AuthContext } from "../../shared/context/auth-context";
import {useHttpClient} from '../../hooks/http-hook'

// import components
import Input from '../../components/shared/FormElements/input'
import {useForm} from '../../hooks/form-hook'
import Button from '../../components/shared/FormElements/button'
import CheckBox from "../../components/shared/FormElements/checkBox";
import ErrorModal from '../../components/shared/UIElements/ErrorModal';
import LoadingSpinner from '../../components/shared/UIElements/LoadingSpinner'

import {
    SIGN_IN_API as apiSignin,
    SIGN_UP_API as apiSignup,
  } from "../../keys/back-end-keys";

export default function SignIn (props) {
    const navigate = useNavigate();
    const auth = useContext(AuthContext)
    const [isLoginMode , setIsLoginMode] = useState(true);
    const {isLoading, error , sendRequest, clearError} = useHttpClient()
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


    const switchModeHandler = ( ) => {
        if(!isLoginMode) {
            setFormData(
                {
                ...formState.inputs,
                username : undefined,
                name : undefined,
                role : undefined,
                repassword : undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isVaslid
            )
        }
        else {
            setFormData(
                {
                    ...formState.inputs,
                    name : {
                        value : "",
                        isValid : false,
                    },
                    username : {
                        value : "",
                        isValid : false,
                    },
                    repassword : {
                        value : "",
                        isValid : false
                    },
                    role: {
                        value : "",
                        isValid : false
                    }
                },
                false
            );
        }
        setIsLoginMode(prev => !prev);
    };

    const authSubmitHandler = async (event)=> {
        event.preventDefault();
        let data;
        console.log(formState.inputs)
        if (isLoginMode) {
          try {
            data = await sendRequest(
              apiSignin,
              "POST",
              {
                "Content-Type": "application/json",
              },
              JSON.stringify({
                // username: formState.inputs.name.value,
                email: formState.inputs.email.value,
                password: formState.inputs.password.value,
              })
            );
          } catch (err) {
    
          }
        } else {
          try {
            data = await sendRequest(
                apiSignup,
                "POST",
                {
                  "Content-Type": "application/json",
                },
                JSON.stringify({
                  // username: formState.inputs.name.value,
                  username: formState.inputs.username.value,
                  password: formState.inputs.password.value,
                  role : formState.inputs.role.value,
                  name : formState.inputs.name.value
                })
          )} 
        catch (err) {
          }
        }
        if (data) {
          auth.login(data.userId, data.token, data.role);
            console.log('login sucesss')
            navigate('/')
        }
        else {
        }
    }

    return (
        <>
        <ErrorModal error={error} onClear={clearError} />

        <div className="container-fluid d-flex flex-column" id = "form-container">
        {isLoading && <LoadingSpinner asOverlay />}
        <form className='signin-form'>
            <div className="form-heading">
            <h3 >Đăng nhập</h3>
            <p>Học Tieng Anh tại HighFiveEnglish </p>
        </div>
        {!isLoginMode &&  
        <>
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
        id = "name"
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
        id = "username"
        type = "text"
        lable = "Tên đăng nhập"
        validators = {[VALIDATOR_REQUIRE()]}
        errorText =  { {
            "REQUIRE" : "Ô này không được để trống"
        }}
        onInput = {inputHandler}
        />
        </>
        
        }
        { isLoginMode &&
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
        }
        <Input
            element = "input"
            id = "password"
            type = "password"
            lable = "Mật khẩu"
            validators = {[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(6)]}
            onInput = {inputHandler}
            errorText = {{
                "REQUIRE" : "Ô này không được để trống",
                'MINLENGTH' : `Mật khẩu phải có độ dài lớn hơn ${6}`
            }}
        />
        
        {!isLoginMode &&
        <>
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
        </>
        }
         <div className="suggest-signup d-flex justify-content-center gap-3">
            <Button
            className = "btn"
            type = "button"
            onClick={switchModeHandler}
            inverse
            >Chuyển sang {isLoginMode? "đăng ký" : "đăng nhập"}
            </Button>  
        </div>
        <div className="submit d-flex justify-content-center mt-3">
        <Button type = "submit" disabled = {!formState.isValid} primary 
        onClick = {authSubmitHandler}
        >
        {isLoginMode ? 'Đăng nhập' : 'Đăng ký'}

        </Button >
        
        </div>
    </form>
       
    </div>
    </>
    )
}

