import { Dispatch } from "redux";
import { profileApi, usersApi } from "../api/api";
import { PostType } from "./store";


const ADD_POST = "social-network/profile/ADD-POST";
const SET_USER_PROFILE = "social-network/profile/SET-USER-PROFILE";
const SET_STATUS = "social-network/profile/SET-USER-STATUS";
const DELETE_POST = "social-network/profile/DELETE-POST"

type ContactsType = {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

type ProfilePageType = {
    postData: Array<PostType>
    profile: ProfileType | null
    status: string
}

let initialState: ProfilePageType = {
    postData: [
        { id: 1, message: "hi, how are you?", likesCount: 12 },
        { id: 2, message: "it is my firt post", likesCount: 15 },
        { id: 3, message: "aaaaaa", likesCount: 1 }
    ],
    profile: null,
    status: ""
}

const ProfileReducer = (state: ProfilePageType = initialState, action: GeneralACType) => {
    switch (action.type) {
        case ADD_POST: {
            let id = state.postData.length + 1;
            let newPost = { id: id, message: action.payload.text, likesCount: 0 };
            return { ...state, postData: [...state.postData, newPost]};
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.payload.profile }
        }
        case SET_STATUS: {
            debugger
            return {...state, status: action.payload.status}
        }
        case DELETE_POST: {
            return {...state, postData: state.postData.filter(p => p.id !== action.payload.id)}
        }
        default: return state;
    }
}

export type GeneralACType = addPostACType | SetUserProfileACType | SetUserStatusACType | deletePostACType;

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (text: string) => {
    return {
        type: ADD_POST,
        payload: {
            text
        }
    } as const
}
export type deletePostACType = ReturnType<typeof deletePostAC>
export const deletePostAC = (id: number) => {
    return {
        type: DELETE_POST,
        payload: {
            id
        }
    } as const
}

export type SetUserProfileACType = ReturnType<typeof SetUserProfile>
export const SetUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile: profile
        }
    } as const
}
export type SetUserStatusACType = ReturnType<typeof SetUserStatus>
export const SetUserStatus = (status: string) => {
    return {
        type: SET_STATUS,
        payload: {
            status: status
        }
    } as const
}

export const getUserProfile = (userId: number) => {
    return async (dispatch: Dispatch) => usersApi.getProfile(userId)
    .then(
        response => {
        dispatch(SetUserProfile(response.data));
    });
}

export const getUserStatus = (userId: number) => {
    return async (dispatch: Dispatch) => {
        let response = await profileApi.getStatus(userId)
        dispatch(SetUserStatus(response.data))
    }    
}

export const updateUserStatus = (status: string) => {
    return async (dispatch: Dispatch) => {
    let response = await profileApi.updateStatus(status)
        if(response.data.resultCode === 0) {
            dispatch(SetUserStatus(status))
        }
    }
}

export default ProfileReducer;