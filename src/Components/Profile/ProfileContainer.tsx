import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ProfileType, SetUserProfile } from "../../redux/ProfileReducer";
import { AppStateType } from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProdileInfo/ProfileInfo";
import s from "./Profile.module.css";


type ProfileContainerPropsType = {
    profile: ProfileType | null
    SetUserProfile: (profile: ProfileType) => void
    match: any
}

class ProfileContainer extends React.Component<ProfileContainerPropsType, {}> {
    
    componentDidMount() {
        debugger
        let userId = this.props.match?.params.userId;
        if(!userId || userId === ":userId") {
            userId = "3";
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId, {
            withCredentials: true,
            headers: {
                'API-KEY': 'c4deeac1-451b-4ef8-8dc8-a4ffeee3c9cc'
            }
        }).then(
            response => {
                this.props.SetUserProfile(response.data)
            }
        );
    }


    render() {
        return (
            <div className={s.mainContent}>
                <ProfileInfo profile={this.props.profile}/>
                <MyPostsContainer />
            </div>
        )
    }

}

let WithURLContainer = withRouter<any, any>(ProfileContainer);
let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {SetUserProfile})(WithURLContainer);