import {SidebarPageType } from "./store"

let initialState: SidebarPageType = {
    friends: [
        { id: 1, name: "Dimych", link: "https://cs6.pikabu.ru/avatars/404/x404070-828004264.png" },
        { id: 2, name: "Andrey", link: "https://aftershock.news/sites/default/files/pictures/picture-42471-1586248390.jpg" },
        { id: 3, name: "Sveta", link: "https://www.meme-arsenal.com/memes/cdfd31e349e0124972afec8440807b32.jpg" }
    ]
}

const SidebarReducer = (state: SidebarPageType = initialState, action: GeneralACType) => {

    return state
}

type GeneralACType = void;

export default SidebarReducer;