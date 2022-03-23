import React from 'react';
import { ProfileType } from '../../../redux/ProfileReducer';
import Preloader from '../../Preloader/Preloader';

import s from "./ProfileInfo.module.css";

type ProfileInfoPrpsType = {
    profile: ProfileType
}

const ProfileInfo: React.FC<any> = (props: ProfileInfoPrpsType) => {
    debugger
    if(!props.profile) {
        return <div><Preloader/></div>
    }
    return (
        <div className={s.InfoContainer}>
            <div className={s.ProfilePhoto}>
                {/* <img src='https://thumbs.dreamstime.com/b/большие-данные-и-интернет-тенденции-вещей-рабочее-место-специалисту-132754575.jpg' alt='aaa' /> */}
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.Avatar}>
                    <img src={props.profile.photos.small} alt="" />
                </div>
                <div className={s.description}>
                    <div className={s.Name}>{props.profile.fullName}</div>
                    <div className={s.About}>{props.profile.aboutMe}</div>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;