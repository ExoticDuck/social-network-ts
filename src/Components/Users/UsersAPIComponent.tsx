import React from "react";
import { UserType } from "../../redux/UsersReducer";
import s from "./Users.module.css"
import Paginator from "../Paginator/Paginator";
import User from "./User";

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

const UsersAPIComponent = ({users, follow, unfollow, totalUsersCount, pageSize, onPageChanged, currentPage, ToggleFollowingInProgress, followingInProgress, ...props}: UsersAPIPropsType) => {

    return (
        <div className={s.UsersPage}>
            <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged}/>
            {
                users.map(user => <User user={user} follow={follow} unfollow={unfollow} followingInProgress={followingInProgress}/>)
            }
        </div>
    )
}

export default UsersAPIComponent;