import { combineReducers, createStore } from "redux";
import MessagesReducer from "./MessagesReducer";
import ProfileReducer from "./ProfileReducer";
import SidebarReducer from "./SidebarReducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    sidebar: SidebarReducer
})

export type AppStateType = ReturnType<typeof reducers>;

let store = createStore(reducers);

export default store;