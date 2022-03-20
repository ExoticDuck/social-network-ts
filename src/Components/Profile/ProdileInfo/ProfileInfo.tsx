import React from 'react';

import s from "./ProfileInfo.module.css";

const ProfileInfo: React.FC<any> = () => {
    return (
        <div className={s.InfoContainer}>
            <div className={s.ProfilePhoto}>
                {/* <img src='https://thumbs.dreamstime.com/b/большие-данные-и-интернет-тенденции-вещей-рабочее-место-специалисту-132754575.jpg' alt='aaa' /> */}
            </div>
            <div className={s.descriptionBlock}>
                Ava + description
            </div>
        </div>
    );
}
export default ProfileInfo;