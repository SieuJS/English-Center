import * as React from 'react'
import Input from '../../components/shared/FormElements/input'
import {VALIDATOR_EMAIL} from "../../utils/validators"

export default function SignIn () {
    return <Input
        element = "input"
        id = "name"
        type = "text"
        lable = "Email"
        validators = {[VALIDATOR_EMAIL()]}
        errorText = "Please enter a valid email."
    ></Input>
}

