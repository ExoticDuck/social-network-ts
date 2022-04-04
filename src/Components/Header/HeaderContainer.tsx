import React from "react";
import Header from "./Header";
import axios from 'axios';
import { connect } from "react-redux";
import { getAuthUserData, setUserData } from './../../redux/AuthReducer';
import { AppStateType } from "../../redux/redux-store";
import { authApi } from "../../api/api";

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type HeaderContainerPropsType = {
    getAuthUserData: () => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);