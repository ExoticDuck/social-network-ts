import React from "react";
import { UserType } from "../../redux/UsersReducer";
import s from "./Users.module.css"
import userPic from "../../img/user.png"
import { NavLink } from 'react-router-dom';

export type UsersAPIPropsType = {
    users: Array<UserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    totalUsersCount: number
    pageSize: number
    onPageChanged: (page: number) => void
    currentPage: number
    ToggleFollowingInProgress: (following: boolean, userId: number) => void
    followingInProgress: number[]
}

const UsersAPIComponent = (props: UsersAPIPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    pages.length = 10
    //console.log(props.totalUsersCount);
    return (
        <div>
            <div className={s.PagesContainer}>
                {
                    pages.map(page => <span onClick={(e) => { props.onPageChanged(page) }} className={props.currentPage === page ? s.SelectedPage : s.page}>{page} </span>)
                }
            </div>
            {
                props.users.map(user => <div key={user.id} className={s.UserCard}>
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
                                user.followed ? <button disabled={props.followingInProgress.some(id => id === user.id)} className={s.FollowButton} onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button> : <button disabled={props.followingInProgress.some(id => id === user.id)} className={s.FollowButton} onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>
                            }
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default UsersAPIComponent;