import { combineReducers, createStore } from "redux";
import MessagesReducer from "./MessagesReducer";
import ProfileReducer from "./ProfileReducer";
import SidebarReducer from "./SidebarReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer
})

export type AppStateType = ReturnType<typeof reducers>;

let store = createStore(reducers);

export default store;