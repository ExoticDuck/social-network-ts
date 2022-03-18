import axios from "axios";
import React from "react";
import { UserType } from "../../redux/UsersReducer";
import s from "./Users.module.css"
import userPic from "../../img/user.png"

export type UsersPropsType = {
    users: Array<UserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
}

const Users = (props: UsersPropsType) => {

    let getUsers = () => {
        if(props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
                response => props.setUsers(response.data.items)
            );
        }
    }
    

    let mappedUsers = props.users.map(user => <div key={user.id} className={s.UserCard}>
        <span className={s.avatarBlock}>
            <div className={s.Avatar}>
                <img src={user.photos.small !== null ? user.photos.small : userPic } alt="Avatar" />
            </div>
            <div>
                {
                    user.followed ? <button className={s.FollowButton} onClick={() => props.unfollow(user.id)}>Unfollow</button> : <button className={s.FollowButton} onClick={() => props.follow(user.id)}>Follow</button>
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

    return(
        <div>
            <button onClick={() => getUsers()}>Get Users</button>
            {mappedUsers}
        </div>
    )
}

 export default Users;