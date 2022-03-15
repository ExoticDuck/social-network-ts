import {MessagePageType} from "./store"

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "ADD-MESSAGE";

let initialState: MessagePageType = {
    dialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valery" },
    ],
    messagesData: [
        { id: 1, text: "Hi" },
        { id: 2, text: "How are you?" },
        { id: 3, text: "What are you doing?" },
        { id: 4, text: "Hello my friend;)" },
        { id: 5, text: "Yo!" },
        { id: 6, text: "Goodbye!" },
    ],
    newMessageText: ""
}

const MessagesReducer = (state: MessagePageType = initialState, action: GeneralACType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {...state, newMessageText: action.payload.newText}
        }
        case SEND_MESSAGE: {
            let id = state.messagesData.length + 1;
            let newMessage = {id: id, text: state.newMessageText};
            return {...state, messagesData: [...state.messagesData, newMessage], newMessageText: ""}
            
        }
        default: return state;
    }
}

export type GeneralACType =  addMessageACType | updateNewMessageTextACType;

export type addMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}


export type updateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>
export const updateNewMessageTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        payload: {
            newText: text
        }
    } as const
}

export default MessagesReducer;