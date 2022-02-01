import { profileAPI } from "../api/api";

//==============CONSTS==========================================================================================================================================

const ADD_POST = 'profileReducer/ADD_POST';
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE';
const SET_STATUS = 'profileReducer/SET_STATUS';
const SAVE_PHOTO_SUCCESS ='profileReducer/SAVE_PHOTO_SUCCESS'

//========================================================================================================================================================

let initialState = {
    postData: [
        { id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula fringilla odio quis eleifend. Curabitur.' },
        { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris diam, porta luctus est id, mollis venenatis augue. Praesent euismod nunc vitae eros commodo, quis euismod enim gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus dolor vel ipsum mattis hendrerit. Aliquam iaculis scelerisque odio vel euismod. Vestibulum pretium mauris ac nisi suscipit.' },
        { id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel pretium orci, eget aliquam sem. Praesent quis nibh fringilla, pretium lacus tempor, tincidunt risus. Nam in scelerisque leo. Morbi dolor.' },
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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
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
export const setUserProfile = (userId) => {
    return ({
        type: SET_USER_PROFILE,
        profile: userId,
    })
}
export const setStatus = (status) => {
    return ({
        type: SET_STATUS,
        status: status,
    })
}
export const savePhotoSuccess = (photos) => {
    return ({
        type: SAVE_PHOTO_SUCCESS,
        photos: photos,
    })
}

//================THUNK CREATORS========================================================================================================================================

export const setUser = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getUser(userId);
        dispatch(setUserProfile(response.data));
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
export const savePhoto = (file) => {
    return async (dispatch) => {
        const response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    }
}
export const saveProfile = (profile, setStatus) => {
    return async (dispatch, getState) => {
        const userId = getState().authReducer.userId;
        const response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
            dispatch(setUser(userId));
        } else {
            setStatus([response.data.messages]);
            return Promise.reject([response.data.messages])
        }
    }
}
//========================================================================================================================================================

export default profileReducer;
