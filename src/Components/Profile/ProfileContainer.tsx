import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { ProfileType} from "../../redux/ProfileReducer";
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
    match: any
}
type RedirectComponentPropsType = {
    profile: ProfileType | null
    getUserProfile: (userId: string) => void
    match: any
    isAuth: boolean
}

class ProfileContainer extends React.Component<ProfileContainerPropsType, {}> {

    componentDidMount() {
        debugger
        let userId = this.props.match?.params.userId;
        if (!userId || userId === ":userId") {
            userId = "3";
        }
        this.props.getUserProfile(userId);
    }


    render() {
        
        return (
            <div className={s.mainContent}>
                <ProfileInfo profile={this.props.profile} />
                <MyPostsContainer />
            </div>
        )
    }

}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

let ProfileContainerCompose = compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

export default ProfileContainerCompose;