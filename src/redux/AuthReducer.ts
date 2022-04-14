import { Dispatch } from "redux"
import { FormAction, stopSubmit } from "redux-form"
import { ThunkAction } from "redux-thunk"
import { authApi } from "../api/api"
import { AppStateType } from "./redux-store"

const SET_USER_DATA = "SET_USER_DATA"

type initialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const AuthReducer = (state: initialStateType = initialState, action: GeneralACType) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: return state;
    }
}

type GeneralACType = setUserDataACType | FormAction;

export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}

export type setUserDataACType = ReturnType<typeof setUserData>
type ThunkType = ThunkAction<void, AppStateType, unknown, GeneralACType>;

export const getAuthUserData = ():ThunkType => (dispatch) => {
    debugger
        authApi.getMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
                    dispatch(setUserData(id, email, login, true));
                }
            })
    }


export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                    dispatch(stopSubmit("login", {_error: message}));
                }
            })
    }
}
export const logout = () => {
    return (dispatch: Dispatch) => {
        authApi.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
            })
    }
}

export default AuthReducer;