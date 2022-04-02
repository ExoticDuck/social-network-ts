import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import axios from "axios";
import { Follow, SetCurrentPage, SetTotalUsersCount, SetUsers, ToggleIsFetching, Unfollow, UserType } from "../../redux/UsersReducer";
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
    
    Follow: (id: number) => void
    Unfollow: (id: number) => void
    SetUsers: (users: Array<UserType>) => void
    SetCurrentPage: (currentPage: number) => void
    SetTotalUsersCount: (totalCount: number) => void
    ToggleIsFetching: (isFetching: boolean) => void
    followingInProgress: number[]
    ToggleFollowingInProgress: (following: boolean, userId: number) => void
}

class UsersClass extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.ToggleIsFetching(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(
            data => {
                setTimeout(() => this.props.ToggleIsFetching(false), 200)
                // this.props.toggleIsFetching(false)
                this.props.SetUsers(data.items)
                this.props.SetTotalUsersCount(data.totalCount)
            }
        );
    }

    onPageChanged = (page: number) => {
        this.props.SetCurrentPage(page)
        this.props.ToggleIsFetching(true);
        usersApi.getUsers(page, this.props.pageSize).then(
            data => {
                setTimeout(() => this.props.ToggleIsFetching(false), 200)
                //this.props.toggleIsFetching(false);
                this.props.SetUsers(data.items)
            }
        );
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
                    follow={this.props.Follow}
                    unfollow={this.props.Unfollow} 
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

// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (id: number) => { dispatch(FollowAC(id)) },
//         unfollow: (id: number) => { dispatch(UnfollowAC(id)) },
//         setUsers: (users: Array<UserType>) => { dispatch(SetUsersAC(users)) },
//         setCurrentPage: (currentPage: number) => { dispatch(SetCurrentPageAC(currentPage)) },
//         setTotalUsersCount: (totalCount: number) => { dispatch(SetTotalUsersCountAC(totalCount)) },
//         toggleIsFetching: (isFetching: boolean) => { dispatch(ToggleIsFetchingAC(isFetching)) }
//     }
// }

export const UsersContainer = connect(mapStateToProps, {Follow, Unfollow, SetUsers, SetCurrentPage, SetTotalUsersCount, ToggleIsFetching, ToggleFollowingInProgress})(UsersClass);