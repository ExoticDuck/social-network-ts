import React, { ChangeEvent } from 'react';
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
    }
    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }
    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: {editMode: boolean, status: string}) {
        if(prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
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