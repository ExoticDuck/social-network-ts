import React from "react";
import { InjectedFormProps } from "redux-form";
import { Input } from "../../utils/FormsControls/FormsControls";
import { requiredField } from "../../utils/validators/validators";
import s from "../../utils/FormsControls/FormControl.module.css"
import { createField } from './../../utils/FormsControls/FormsControls';

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
                {createField("Login", "login", [requiredField], Input, {})}
                {createField("Password", "password", [requiredField], Input, { type: "password" })}
                {createField("input", "rememberMe", undefined, Input, { type: "checkbox" }, "Remember me")}
            {error && <div className={s.formSummaryError}> {error} </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginForm;