import React from "react";
import { reduxForm } from "redux-form";
import LoginForm, { FormDataType } from "./LoginForm";
import s from './Login.module.css'
import { connect } from 'react-redux';
import { login} from './../../redux/AuthReducer';
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

type LoginPropsType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}

const Login = (props: LoginPropsType) => {
debugger
    let onSubmitHandler = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={"profile"}/>
    }

    return (
        <div className={s.LoginPage}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    )
}

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);