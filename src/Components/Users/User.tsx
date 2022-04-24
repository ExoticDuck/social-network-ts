import React from "react";
import { UserType } from "../../redux/UsersReducer";
import s from "./Users.module.css"
import userPic from "../../img/user.png"
import { NavLink } from 'react-router-dom';

export type UserPropsType = {
    user: UserType
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: number[]
}

const User = ({user, follow, unfollow, followingInProgress}: UserPropsType) => {

    return (
                <div key={user.id} className={s.UserCard}>
                    <span className={s.avatarBlock}>
                        <div className={s.Avatar}>
                            <NavLink to={"/profile/" + user.id}>
                                <img src={user.photos.small !== null ? user.photos.small : userPic} alt="Avatar" />
                            </NavLink>
                        </div>

                    </span>
                    <div className={s.infoBlock}>
                        <span className={s.userInfo}>
                            <div>{user.name}</div>
                            <div className={s.Status}>{user.status}</div>
                        </span>
                        <span className={s.location}>
                            <div>{'Country'}</div>
                            <div>{'City'}</div>
                        </span>
                        <div className={s.followBox}>
                            {
                                user.followed ? <button disabled={followingInProgress.some(id => id === user.id)} className={s.FollowButton} onClick={() => {
                                    unfollow(user.id)
                                }}>Unfollow</button> : <button disabled={followingInProgress.some(id => id === user.id)} className={s.FollowButton} onClick={() => {
                                    follow(user.id)
                                }}>Follow</button>
                            }
                        </div>
                    </div>
                </div>
    )
}

export default User;