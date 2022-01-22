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
                isAuth: true,
            };
        }
        default: return state;
    }
}

//=========ACTION CREATORS===============================================================================================================================================

export const setAuthUserData = (id, email, login) => {
    return ({
        type: SET_USER_DATA,
        data: {
            userId: id,
            email,
            login,
        },
    })
}

//================THUNK CREATORS========================================================================================================================================

export const getAuth = () => {
    return (dispatch) => {
        authAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    }
}

//========================================================================================================================================================

export default authReducer;
