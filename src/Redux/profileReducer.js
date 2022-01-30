import { profileAPI } from "../api/api";

//==============CONSTS==========================================================================================================================================

const ADD_POST = 'profileReducer/ADD_POST';
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE';
const SET_STATUS = 'profileReducer/SET_STATUS';

//========================================================================================================================================================

let initialState = {
    postData: [
        { id: 1, message: 'My first post' },
        { id: 2, message: 'My second post' },
        { id: 3, message: 'My third post' },
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.newPostText,
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        default: return state;
    }
}

//=========ACTION CREATORS===============================================================================================================================================

export const addPostActionCreator = (newPostText) => {
    return ({
        type: ADD_POST,
        newPostText: newPostText,
    })
}
export const setUserProfile = (profile) => {
    return ({
        type: SET_USER_PROFILE,
        profile: profile,
    })
}
export const setStatus = (status) => {
    return ({
        type: SET_STATUS,
        status: status,
    })
}

//================THUNK CREATORS========================================================================================================================================

export const setUser = (userId) => {
    return (dispatch) => {
        profileAPI.getUser(userId).then(({ data }) => {
            dispatch(setUserProfile(data));
        });
    }
}
export const getStatus = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

//========================================================================================================================================================

export default profileReducer;
