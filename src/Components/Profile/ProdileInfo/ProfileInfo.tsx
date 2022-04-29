import React from 'react';
import { ProfileType } from '../../../redux/ProfileReducer';
import Preloader from '../../Preloader/Preloader';
import s from "./ProfileInfo.module.css";
import userFoto from "../../../img/user.png"
import ProfileStatus from './ProfileStatus';

type ProfileInfoPropsType = {
    profile: ProfileType
    updateUserStatus: (userId: string) => void
    status: string
}

const ProfileInfo: React.FC<any> = ({profile, updateUserStatus, status}: ProfileInfoPropsType) => {

    if(!profile) {
        return <div><Preloader/></div>
    }
    return (
        <div className={s.InfoContainer}>
            <div className={s.ProfilePhoto}>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.Avatar}>
                    <img src={profile.photos.small || userFoto} alt="" />
                </div>
                <div className={s.description}>
                    <div className={s.Name}>{profile.fullName}</div>
                    <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;