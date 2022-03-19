import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { FollowAC, SetCurrentPageAC, SetTotalUsersCountAC, SetUsersAC, UnfollowAC, UserType } from "../../redux/UsersReducer";
import Users from "./Users";
import UsersClass from "./UsersClass";

type mapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number, 
    currentPage: number
}

type mapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (id: number) => {dispatch(FollowAC(id))},
        unfollow: (id: number) => {dispatch(UnfollowAC(id))},
        setUsers: (users: Array<UserType>) => {dispatch(SetUsersAC(users))},
        setCurrentPage: (currentPage: number) => {dispatch(SetCurrentPageAC(currentPage))},
        setTotalUsersCount: (totalCount: number) => {dispatch(SetTotalUsersCountAC(totalCount))}
    }
}




// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);