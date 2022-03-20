import axios from "axios";
import React from "react";
import { UserType } from "../../redux/UsersReducer"; 
import UsersAPIComponent from "./UsersAPIComponent";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class UsersClass extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=` + this.props.currentPage + `&count=` + this.props.pageSize, {
            withCredentials: true,
            headers: {
                'API-KEY': 'c4deeac1-451b-4ef8-8dc8-a4ffeee3c9cc'
            }
        }).then(
            response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        );
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'c4deeac1-451b-4ef8-8dc8-a4ffeee3c9cc'
            }
        }).then(
            response => this.props.setUsers(response.data.items)
        );
    }

    render() {
        return (
            <UsersAPIComponent
                totalUsersCount={this.props.totalUsersCount} 
                pageSize={this.props.pageSize} 
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage} 
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}/>
        )
    }
}
export default UsersClass;