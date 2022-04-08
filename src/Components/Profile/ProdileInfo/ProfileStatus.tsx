import React, { ChangeEvent } from 'react';
import { ProfileType } from '../../../redux/ProfileReducer';
import Preloader from '../../Preloader/Preloader';

import s from "./ProfileInfo.module.css";

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (userId: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = { 
        editMode: false, 
        status: this.props.status
    };
    activateEditMode = () => {
        this.setState({editMode: true});
    }
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateUserStatus(this.state.status)
        debugger
    }
    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={() => {this.activateEditMode()}}>{this.props.status || "status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.state.status} autoFocus onChange={this.onChangeHandler} onBlur={() => {this.deactivateEditMode()}}/>
                    </div>
                }
            </div>
        );
    }

}
export default ProfileStatus;