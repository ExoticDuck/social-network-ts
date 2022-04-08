import { applyMiddleware, combineReducers, createStore } from "redux";
import AuthReducer from "./AuthReducer";
import MessagesReducer from "./MessagesReducer";
import ProfileReducer from "./ProfileReducer";
import SidebarReducer from "./SidebarReducer";
import UsersReducer from "./UsersReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof reducers>;

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;