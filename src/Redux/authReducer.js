import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

//========================================================================================================================================================

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
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

//================THUNK CREATORS========================================================================================================================================

export const getAuth = () => {
    return (dispatch) => {
        authAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    }
}
export const login = (email, password, setStatus) => {
    return (dispatch) => {
        authAPI.login(email, password).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuth());
            } else {
                setStatus([response.data.messages]);
            }
        });
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    }
}

//========================================================================================================================================================

export default authReducer;
