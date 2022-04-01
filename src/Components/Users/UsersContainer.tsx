import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import axios from "axios";
import { Follow, SetCurrentPage, SetTotalUsersCount, SetUsers, ToggleIsFetching, Unfollow, UserType } from "../../redux/UsersReducer";
import UsersAPIComponent from "./UsersAPIComponent";
import Preloader from "../Preloader/Preloader";

type mapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
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
}

class UsersClass extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.ToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=` + this.props.currentPage + `&count=` + this.props.pageSize, {
            withCredentials: true,
            headers: {
                'API-KEY': 'c4deeac1-451b-4ef8-8dc8-a4ffeee3c9cc'
            }
        }).then(
            response => {
                setTimeout(() => this.props.ToggleIsFetching(false), 500)
                // this.props.toggleIsFetching(false)
                this.props.SetUsers(response.data.items)
                this.props.SetTotalUsersCount(response.data.totalCount)
            }
        );
    }

    onPageChanged = (page: number) => {
        this.props.SetCurrentPage(page)
        this.props.ToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'c4deeac1-451b-4ef8-8dc8-a4ffeee3c9cc'
            }
        }).then(
            response => {
                setTimeout(() => this.props.ToggleIsFetching(false), 500)
                //this.props.toggleIsFetching(false);
                this.props.SetUsers(response.data.items)
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
                    unfollow={this.props.Unfollow} />
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
        isFetching: state.usersPage.isFetching
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

export const UsersContainer = connect(mapStateToProps, {Follow, Unfollow, SetUsers, SetCurrentPage, SetTotalUsersCount, ToggleIsFetching})(UsersClass);