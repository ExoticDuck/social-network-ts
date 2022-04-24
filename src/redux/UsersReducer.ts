import { AxiosResponse } from "axios"
import { Dispatch } from "redux"
import { followApi, usersApi } from "../api/api"
import { updateObjectInArray } from './../utils/object-helper';


const FOLLOW = "social-network/users/FOLLOW"
const UNFOLLOW = "social-network/users/UNFOLLOW"
const SET_USERS = "social-network/users/SET-USERS"
const SET_CURRENT_PAGE = "social-network/users/SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "social-network/users/SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETHING = "social-network/users/TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "social-network/users/TOGGLE-FOLLOWING-IN-PROGRESS"

export type UsersPageType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
}

export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: null,
    photos: {
        small: null | any,
        large: null | any
    },
    status: null | string,
    followed: boolean
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


const UsersReducer = (state: UsersPageType = initialState, action: UsersACType) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.id, "id", {followed: true})
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.id, "id", {followed: false})
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.payload.users]
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.payload.totalCount
            }
        }
        case TOGGLE_IS_FETHING: {
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.payload.following ? [...state.followingInProgress, action.payload.userId] : [...state.followingInProgress.filter(id => id !== action.payload.userId)]
            }
        }
        default: return state;
    }
}

export type UsersACType = FollowACType | UnfollowACType | SetUsersACType | SetCurrentPageACType | SetTotalUsersCountACType | ToggleIsFetchingACType | ToggleFollowingInProgressACType;

export type FollowACType = ReturnType<typeof Follow>
export const Follow = (id: number) => {
    return {
        type: FOLLOW,
        payload: {
            id
        }
    } as const
}
export type UnfollowACType = ReturnType<typeof Unfollow>
export const Unfollow = (id: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            id
        }
    } as const
}
export type SetUsersACType = ReturnType<typeof SetUsers>
export const SetUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        payload: {
            users: users
        }
    } as const
}
export type SetCurrentPageACType = ReturnType<typeof SetCurrentPage>
export const SetCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    } as const
}
export type SetTotalUsersCountACType = ReturnType<typeof SetTotalUsersCount>
export const SetTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {
            totalCount
        }
    } as const
}
export type ToggleIsFetchingACType = ReturnType<typeof ToggleIsFetching>
export const ToggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETHING,
        payload: {
            isFetching: isFetching
        }
    } as const
}
export type ToggleFollowingInProgressACType = ReturnType<typeof ToggleFollowingInProgress>
export const ToggleFollowingInProgress = (following: boolean, userId: number) => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        payload: {
            following,
            userId
        }
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(ToggleIsFetching(true));
        dispatch(SetCurrentPage(currentPage));
        let data = await usersApi.getUsers(currentPage, pageSize)
        setTimeout(() => dispatch(ToggleIsFetching(false)), 200)
        dispatch(SetUsers(data.items));
        dispatch(SetTotalUsersCount(data.totalCount));
    }
}

type apiMethodType = (userId: number) => Promise<AxiosResponse<any, any>>
type actionCreatorType = typeof Follow | typeof Unfollow;

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: apiMethodType, actionCreator: actionCreatorType) => {
    dispatch(ToggleFollowingInProgress(true, userId))
        let response = await apiMethod(userId)
        if (response.data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(ToggleFollowingInProgress(false, userId));
}

export const follow = (userId: number) => {

    return async (dispatch: Dispatch) => {
        followUnfollowFlow(dispatch, userId, followApi.follow.bind(userId), Follow);
    }
}

export const unfollow = (userId: number) => {

    return async (dispatch: Dispatch) => {
        followUnfollowFlow(dispatch, userId, followApi.unfollow.bind(userId), Unfollow);
    }
}


export default UsersReducer;