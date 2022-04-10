import React from "react";
import s from "./FormControl.module.css"

const FormControl = ({ input, meta, child, ...props }: any) => {
    let hasError = meta.touched && meta.error; 

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "") }>
            {props.children}
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
    )
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
    )
}

