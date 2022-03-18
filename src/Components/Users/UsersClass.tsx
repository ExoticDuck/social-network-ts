import axios from "axios";
import React from "react";
import s from "./Users.module.css"
import userPic from "../../img/user.png"
import { UsersPropsType } from "./Users";

class UsersClass extends React.Component<UsersPropsType, {}> {

    constructor(props: UsersPropsType) {
        super(props);
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
                response => this.props.setUsers(response.data.items)
            );
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(user => <div key={user.id} className={s.UserCard}>
                        <span className={s.avatarBlock}>
                            <div className={s.Avatar}>
                                <img src={user.photos.small !== null ? user.photos.small : userPic } alt="Avatar" />
                            </div>
                            <div>
                                {
                                    user.followed ? <button className={s.FollowButton} onClick={() => this.props.unfollow(user.id)}>Unfollow</button> : <button className={s.FollowButton} onClick={() => this.props.follow(user.id)}>Follow</button>
                                }
                            </div>
                        </span>
                        <div className={s.infoBlock}>
                            <span className={s.userInfo}>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{'user.location.country'}</div>
                                <div>{'user.location.city'}</div>
                            </span>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}
export default UsersClass;