import { Dispatch } from "redux";
import { profileApi, usersApi } from "../api/api";
import { PostType } from "./store";


const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-USER-STATUS";

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
        { id: 2, message: "aaaaaa", likesCount: 1 }
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
        default: return state;
    }
}

export type GeneralACType = addPostACType | SetUserProfileACType | SetUserStatusACType;

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (text: string) => {
    return {
        type: ADD_POST,
        payload: {
            text
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
    return (dispatch: Dispatch) => usersApi.getProfile(userId)
    .then(
        response => {
        dispatch(SetUserProfile(response.data));
    });
}

export const getUserStatus = (userId: number) => {
    return (dispatch: Dispatch) => profileApi.getStatus(userId)
    .then(response =>{
        debugger
        dispatch(SetUserStatus(response.data))
    })
        
        
}

export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch) => profileApi.updateStatus(status)
    .then(response => {
        debugger
        if(response.data.resultCode === 0) {
            dispatch(SetUserStatus(status))
        }
    })
}

export default ProfileReducer;