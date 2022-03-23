import axios from "axios";
import React from "react";
import { connect } from "react-redux";

import { ProfileType, SetUserProfile } from "../../redux/ProfileReducer";
import { AppStateType } from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProdileInfo/ProfileInfo";
import s from "./Profile.module.css";


type ProfileContainerPropsType = {
    profile: ProfileType | null
    SetUserProfile: (profile: ProfileType) => void
  }

class ProfileContainer extends React.Component<ProfileContainerPropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`, {
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

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}


export default connect(mapStateToProps, {SetUserProfile})(ProfileContainer);