import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { getUserStatus, ProfileType, updateUserStatus} from "../../redux/ProfileReducer";
import { AppStateType } from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProdileInfo/ProfileInfo";
import s from "./Profile.module.css";
import { usersApi } from './../../api/api';
import { getUserProfile } from './../../redux/ProfileReducer';
import { withAuthRedirect } from "../../HOC/WithAuthRedirect";
import { compose } from "redux";


type ProfileContainerPropsType = {
    profile: ProfileType | null
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (userId: string) => void
    match: any
    status: string
    authorizedUserId: number
    isAuth: boolean
}


class ProfileContainer extends React.Component<ProfileContainerPropsType, {}> {

    componentDidMount() {
        debugger
        let userId = this.props.match?.params.userId;
        if (!userId || userId === ":userId") {
            userId = this.props.authorizedUserId.toString();
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }


    render() {
        
        return (
            <div className={s.mainContent}>
                <ProfileInfo profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
                <MyPostsContainer />
            </div>
        )
    }

}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

let ProfileContainerCompose = compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

export default ProfileContainerCompose;