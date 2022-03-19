import axios from "axios";
import React from "react";
import s from "./Users.module.css"
import userPic from "../../img/user.png"
import { UserType } from "../../redux/UsersReducer";


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
            response => {this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)}
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

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        pages.length = 10
        console.log(this.props.totalUsersCount);
        
        
        return (
            <div>
                <div className={s.PagesContainer}>
                   {
                       pages.map(page => <span onClick={(e) => {this.onPageChanged(page)}} className={this.props.currentPage === page ? s.SelectedPage : s.page}>{page} </span>)
                   }
                </div>
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