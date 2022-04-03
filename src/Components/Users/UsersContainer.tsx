import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import axios from "axios";
import { follow, getUsers, SetCurrentPage, SetTotalUsersCount, SetUsers, ToggleIsFetching, unfollow, UserType } from "../../redux/UsersReducer";
import UsersAPIComponent from "./UsersAPIComponent";
import Preloader from "../Preloader/Preloader";
import { usersApi } from "../../api/api";
import { ToggleFollowingInProgress } from './../../redux/UsersReducer';

type mapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
}

type mapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    isFetching: boolean
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    SetUsers: (users: Array<UserType>) => void
    SetCurrentPage: (currentPage: number) => void
    SetTotalUsersCount: (totalCount: number) => void
    ToggleIsFetching: (isFetching: boolean) => void
    followingInProgress: number[]
    ToggleFollowingInProgress: (following: boolean, userId: number) => void
}

class UsersClass extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize); 
        //*передаем параметры для thunk-creator 
    }

    onPageChanged = (page: number) => {
        this.props.getUsers(page, this.props.pageSize); 
        this.props.SetCurrentPage(page);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <UsersAPIComponent
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow} 
                    ToggleFollowingInProgress={this.props.ToggleFollowingInProgress}
                    followingInProgress={this.props.followingInProgress}
                    />
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {follow, 
    unfollow, SetUsers, SetCurrentPage, SetTotalUsersCount, 
    ToggleIsFetching, ToggleFollowingInProgress, getUsers})(UsersClass);