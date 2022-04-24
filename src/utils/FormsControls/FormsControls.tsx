import React from "react";
import s from "./FormControl.module.css"
import { Field } from 'redux-form';
import { requiredField } from "../validators/validators";

const FormControl = ({ input, meta: {touched, error}, children, ...props }: any) => {
    let hasError = touched && error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            {children}
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props: any) => {
    const { input, meta, child, ...restProps } = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
    )
}

export const Input = (props: any) => {
    const { input, meta, child, ...restProps } = props
    return (
        <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
    )
}

type componentType = typeof Input | typeof Textarea;
type validatorsType = typeof requiredField;

export const createField = (placeholder: string, name: string, validators: Array<validatorsType> | undefined, component: componentType, props: any, text: string = "") => {
    return <div>
        <Field placeholder={placeholder} name={name} component={component}
            validate={validators} {...props} /> {text}
    </div>
}
