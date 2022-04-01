import React from "react";
import Header from "./Header";
import axios from 'axios';
import { connect } from "react-redux";
import { setUserData } from './../../redux/AuthReducer';
import { AppStateType } from "../../redux/redux-store";

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type HeaderContainerPropsType = {
    setUserData: (id: number | null, email: string | null, login: string | null) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'c4deeac1-451b-4ef8-8dc8-a4ffeee3c9cc'
            }
        })
        .then(response => {
            if(response.data.resultCode === 0) {
               
                let {id, email, login} = response.data.data;
                this.props.setUserData(id, email, login);
            }
        })
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

export default connect(mapStateToProps, {setUserData})(HeaderContainer);