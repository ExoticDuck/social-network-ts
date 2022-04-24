import React from "react";
import s from "./Paginator.module.css"


export type UsersAPIPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (page: number) => void
    currentPage: number
}

const Paginator = (props: UsersAPIPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    pages.length = 20;

    return (
            <div className={s.PagesContainer}>
                {
                    pages.map(page => <span onClick={(e) => { props.onPageChanged(page) }} className={props.currentPage === page ? s.SelectedPage : s.page}>{page} </span>)
                }
            </div>
    );
}

export default Paginator;