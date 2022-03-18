

const FOLLOW = "FOLLOW"
const UNFOLLOW ="UNFOLLOW"
const SET_USERS = "SET_USERS"

export type UsersPageType = {
    users: Array<UserType>
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
    users: []
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
                users: [...state.users, ...action.payload.users]
            };
        }
        default: return state;
    }
}

export type UsersACType = FollowACType | UnfollowACType | SetUsersACType;

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

export default UsersReducer;