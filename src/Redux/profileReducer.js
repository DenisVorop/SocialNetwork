import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

//========================================================================================================================================================

let initialState = {
    postData: [
        { id: 1, message: 'My first post' },
        { id: 2, message: 'My second post' },
        { id: 3, message: 'My third post' },
    ],
    newPostText: '',
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
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

export const addPostActionCreator = () => {
    return ({
        type: ADD_POST,
    })
}
export const updateNewPostTextActionCreator = (text) => {
    return ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
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
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.result === 0) {
                dispatch(setStatus(status));
            }
        });
    }
}

//========================================================================================================================================================

export default profileReducer;
