import React, { ChangeEvent, useState } from 'react';
import { updateUserStatus } from '../../../redux/ProfileReducer';
import s from "./ProfileInfo.module.css";

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileStatus = (props: ProfileStatusPropsType) => {
    debugger
    const [status, setStatus] = useState<string>(props.status);
    const [editMode, setEditMode] = useState<boolean>(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={() => {activateEditMode()}}>{props.status || "status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input value={status} autoFocus onChange={onChangeHandler} onBlur={() => {deactivateEditMode()}}/>
                </div>
            }
        </div>
    );
}


export default ProfileStatus;