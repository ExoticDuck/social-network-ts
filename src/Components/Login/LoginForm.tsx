import React from "react";
import { Field, InjectedFormProps } from "redux-form";
import { Input } from "../../utils/FormsControls/FormsControls";
import { requiredField } from "../../utils/validators/validators";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} 
                validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} 
                 validate={[requiredField]}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginForm;