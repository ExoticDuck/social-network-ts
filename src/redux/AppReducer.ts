import { Dispatch } from "redux"
import { FormAction, stopSubmit } from "redux-form"
import { ThunkAction } from "redux-thunk"
import { authApi } from "../api/api"
import { AppStateType } from "./redux-store"
import { getAuthUserData } from './AuthReducer';

const SET_INITIALIZED = "SET-INITIALIZED";

type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false
}

const AppReducer = (state: initialStateType = initialState, action: GeneralACType) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default: return state;
    }
}

type GeneralACType = setInitializedACType;

export const setInitialized = () => {
    return {
        type: SET_INITIALIZED
    } as const
}
type ThunkType = ThunkAction<void, AppStateType, unknown, GeneralACType>;
export type setInitializedACType = ReturnType<typeof setInitialized>

export const initializeApp = ():ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {})
}

export default AppReducer;