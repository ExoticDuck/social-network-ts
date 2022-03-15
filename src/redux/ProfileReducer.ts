import {ProfilePageType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState: ProfilePageType = {
    postData: [
        { id: 1, message: "hi, how are you?", likesCount: 12 },
        { id: 2, message: "it is my firt post", likesCount: 15 },
        { id: 2, message: "aaaaaa", likesCount: 1 }
    ],
    newPostText: ""
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
        default: return state;
    }
}

export type GeneralACType = addPostACType | updateNewPostTextACType;

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


export default ProfileReducer;