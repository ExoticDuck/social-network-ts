import { PostType } from "./store";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

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
    newPostText: string
    profile: ProfileType | null
}

let initialState: ProfilePageType = {
    postData: [
        { id: 1, message: "hi, how are you?", likesCount: 12 },
        { id: 2, message: "it is my firt post", likesCount: 15 },
        { id: 2, message: "aaaaaa", likesCount: 1 }
    ],
    newPostText: "",
    profile: null 
}

const ProfileReducer = (state: ProfilePageType = initialState, action: GeneralACType) => {
    switch (action.type) {
        case ADD_POST: {
            let id = state.postData.length + 1;
            let newPost = { id: id, message: state.newPostText, likesCount: 0 };
            return {...state, postData: [...state.postData, newPost], newPostText: ""};
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.payload.newText};
        }
        case SET_USER_PROFILE : {
            return {...state, profile: action.payload.profile}
        }
        default: return state;
    }
}

export type GeneralACType = addPostACType | updateNewPostTextACType | SetUserProfileACType;

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}

export type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        payload: {
            newText: text
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


export default ProfileReducer;