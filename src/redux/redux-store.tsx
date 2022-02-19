import { combineReducers, createStore } from "redux";
import MessagesReducer from "./MessagesReducer";
import ProfileReducer from "./ProfileReducer";
import SidebarReducer from "./SidebarReducer";
import { StoreType } from "./store";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    sidebar: SidebarReducer
})

let store:StoreType = createStore(reducers);

export default store;