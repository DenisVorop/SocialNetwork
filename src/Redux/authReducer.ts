import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'authReducer/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'authReducer/GET_CAPTCHA_URL_SUCCESS';

//========================================================================================================================================================

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null,
}

export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            };
        }
        default: return state;
    }
}

//=========ACTION CREATORS===============================================================================================================================================
type setAuthUserDataPayloadType = {
    userId: number
    email: string
    login: string
    isAuth: boolean
}
type setAuthUserDatatype = {
    type: typeof SET_USER_DATA,
    payload: setAuthUserDataPayloadType
}

export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean): setAuthUserDatatype => {
    return ({
        type: SET_USER_DATA,
        payload: {
            userId: id,
            email,
            login,
            isAuth,
        },
    })
}

type getCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    captchaUrl: { captchaUrl: string }
}
export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessType => {
    return ({
        type: GET_CAPTCHA_URL_SUCCESS,
        captchaUrl: { captchaUrl },
    })
}

//================THUNK CREATORS========================================================================================================================================

export const getAuth = () => {
    return async (dispatch: any) => {
        const response = await authAPI.getAuth();
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}
export const login = (email: string, password: string, setStatus: any, captcha: string) => {
    return async (dispatch: any) => {
        const response = await authAPI.login(email, password, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuth());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            setStatus([response.data.messages]);
        }
    }
}
export const getCaptchaUrl = () => {
    return async (dispatch: any) => {
        const response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
    }
}
export const logout = () => {
    return async (dispatch: any) => {
        const response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

//========================================================================================================================================================

export default authReducer;
