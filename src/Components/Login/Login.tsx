import React from "react";
import { reduxForm } from "redux-form";
import LoginForm, { FormDataType } from "./LoginForm";
import s from './Login.module.css'

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = () => {

    let onSubmitHandler = (formData: FormDataType) => {
        console.log(formData);
        
    }

    return (
        <div className={s.LoginPage}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    )
}

export default Login;