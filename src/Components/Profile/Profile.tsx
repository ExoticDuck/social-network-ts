import React from 'react';
import { StoreType } from '../../redux/store';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProdileInfo/ProfileInfo';
import s from "./Profile.module.css";


type ProfilePropsType = {
  store?: StoreType
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
      <div className="main-content">
        <ProfileInfo/>
        <MyPostsContainer />
      </div>
    );
}
export default Profile;