import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'authReducer/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'authReducer/GET_CAPTCHA_URL_SUCCESS';

//========================================================================================================================================================

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
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

export const setAuthUserData = (id, email, login, isAuth) => {
    return ({
        type: SET_USER_DATA,
        data: {
            userId: id,
            email,
            login,
            isAuth,
        },
    })
}
export const getCaptchaUrlSuccess = (captchaUrl) => {
    return ({
        type: GET_CAPTCHA_URL_SUCCESS,
        captchaUrl: captchaUrl,
    })
}

//================THUNK CREATORS========================================================================================================================================

export const getAuth = () => {
    return async (dispatch) => {
        const response = await authAPI.getAuth();
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}
export const login = (email, password, setStatus, captcha) => {
    return async (dispatch) => {
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
    return async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
    }
}
export const logout = () => {
    return async (dispatch) => {
        const response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

//========================================================================================================================================================

export default authReducer;
