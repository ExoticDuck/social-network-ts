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
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        }
        default: return state;
    }
}

type GeneralACType = setUserDataACType;

export const setUserData = (id: number | null, email: string | null, login: string | null) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id, 
            email, 
            login
        }
    } as const
}

export type setUserDataACType = ReturnType<typeof setUserData>

export default AuthReducer;