import React from 'react';
import { ProfileType } from '../../redux/ProfileReducer';
import { StoreType } from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProdileInfo/ProfileInfo';
import s from "./Profile.module.css";


type ProfilePropsType = {
  profile: ProfileType
  SetUserProfile: (profile: ProfileType) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
      <div className={s.mainContent}>
        <ProfileInfo/>
        <MyPostsContainer />
      </div>
    );
}
export default Profile;