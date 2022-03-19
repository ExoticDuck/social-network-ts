

const FOLLOW = "FOLLOW"
const UNFOLLOW ="UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

export type UsersPageType = {
    users: Array<UserType>, 
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
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
    currentPage: 1
}


const UsersReducer = (state: UsersPageType = initialState, action: UsersACType) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.payload.id) {
                        let userCopy = {...u, followed: true};
                        return userCopy;
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.payload.id) {
                        let userCopy = {...u, followed: false};
                        return userCopy;
                    }
                    return u;
                })
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
        default: return state;
    }
}

export type UsersACType = FollowACType | UnfollowACType | SetUsersACType | SetCurrentPageACType | SetTotalUsersCountACType;

export type FollowACType = ReturnType<typeof FollowAC>
export const FollowAC = (id: number) => {
    return {
        type: FOLLOW,
        payload: {
            id
        }
    } as const
}
export type UnfollowACType = ReturnType<typeof UnfollowAC>
export const UnfollowAC = (id: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            id
        }
    } as const
}
export type SetUsersACType = ReturnType<typeof SetUsersAC>
export const SetUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        payload: {
            users: users
        }
    } as const
}
export type SetCurrentPageACType = ReturnType<typeof SetCurrentPageAC>
export const SetCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    } as const
}
export type SetTotalUsersCountACType = ReturnType<typeof SetTotalUsersCountAC>
export const SetTotalUsersCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {
            totalCount
        }
    } as const
}

export default UsersReducer;