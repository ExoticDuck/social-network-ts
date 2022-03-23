import MessagesReducer from "./MessagesReducer"
import ProfileReducer, { ProfileType } from "./ProfileReducer"
import SidebarReducer from "./SidebarReducer"

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: any) => void
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    text: string
}
export type FriendType = {
    id: number
    name: string
    link: string
}
export type ProfilePageType = {
    postData: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}
export type MessagePageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageText: string
}
export type SidebarPageType = {
    friends: Array<FriendType>
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagePageType
    sidebar: SidebarPageType
}

let store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: "hi, how are you?", likesCount: 12 },
                { id: 2, message: "it is my firt post", likesCount: 15 },
                { id: 2, message: "aaaaaa", likesCount: 1 }
            ],
            newPostText: "", 
            profile: null
        },
        messagesPage: {
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
        },
        sidebar: {
            friends: [
                { id: 1, name: "Dimych", link: "https://cs6.pikabu.ru/avatars/404/x404070-828004264.png" },
                { id: 2, name: "Andrey", link: "https://aftershock.news/sites/default/files/pictures/picture-42471-1586248390.jpg" },
                { id: 3, name: "Sveta", link: "https://www.meme-arsenal.com/memes/cdfd31e349e0124972afec8440807b32.jpg" }
            ]
        }
    },
    _callSubscriber(state: StateType) {
        console.log("state is changeds");
    },

    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },

    addPost() {
        let id = this._state.profilePage.postData.length + 1;
        let newPost = { id: id, message: this._state.profilePage.newPostText, likesCount: 0 };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action); //возвращает стейт
        this._state.messagesPage = MessagesReducer(this._state.messagesPage, action); //возвращает стейт
        this._state.sidebar = SidebarReducer(this._state.sidebar, action); //возвращает стейт

        this._callSubscriber(this._state);
    }

}




export default store;