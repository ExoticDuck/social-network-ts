import React, { Component, ComponentType } from "react"
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { AppStateType } from "../redux/redux-store";
type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props;

        if(!isAuth) return <Redirect to="/login"/>
        
        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);
    return ConnectedRedirectComponent;
}