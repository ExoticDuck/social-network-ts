import {MessagePageType} from "./store"

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
    ]
}

const MessagesReducer = (state: MessagePageType = initialState, action: GeneralACType) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let id = state.messagesData.length + 1;
            let newMessage = {id: id, text: action.payload.value};
            return {...state, messagesData: [...state.messagesData, newMessage]}
            
        }
        default: return state;
    }
}

export type GeneralACType =  addMessageACType;

export type addMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = (value: string) => {
    return {
        type: SEND_MESSAGE,
        payload: {
            value
        }
    } as const
}

export default MessagesReducer;