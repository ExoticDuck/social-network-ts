import React from 'react';
import { ProfileType } from '../../../redux/ProfileReducer';
import Preloader from '../../Preloader/Preloader';

import s from "./ProfileInfo.module.css";

type ProfileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = { editMode: false };
    activateEditMode = () => {
        this.setState({editMode: true});
    }
    deactivateEditMode = () => {
        this.setState({editMode: false});
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={() => {this.activateEditMode()}}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input type="text" value={this.props.status} autoFocus onBlur={() => {this.deactivateEditMode()}}/>
                    </div>
                }
            </div>
        );
    }

}
export default ProfileStatus;