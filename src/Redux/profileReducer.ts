//@ts-ignore
import { PostDataType, ProfileType, PhotosType } from '../types/Types.ts'; //@ts-ignore
import { profileAPI } from "../api/api.ts";
import { AppStateType } from './redux-store';
import { ThunkAction } from 'redux-thunk';

//==============CONSTS==========================================================================================================================================

const ADD_POST = 'profileReducer/ADD_POST';
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE';
const SET_STATUS = 'profileReducer/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profileReducer/SAVE_PHOTO_SUCCESS'

//========================================================================================================================================================

let initialState = {
    postData: [
        { id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula fringilla odio quis eleifend. Curabitur.' },
        { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris diam, porta luctus est id, mollis venenatis augue. Praesent euismod nunc vitae eros commodo, quis euismod enim gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus dolor vel ipsum mattis hendrerit. Aliquam iaculis scelerisque odio vel euismod. Vestibulum pretium mauris ac nisi suscipit.' },
        { id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel pretium orci, eget aliquam sem. Praesent quis nibh fringilla, pretium lacus tempor, tincidunt risus. Nam in scelerisque leo. Morbi dolor.' },
    ] as Array<PostDataType>,
    profile: null as ProfileType | null,
    status: '',
}

export type initialStateType = typeof initialState;

type ActionTypes = addPostActionCreatorType | setUserProfileType | setStatusType | savePhotoSuccessType

const profileReducer = (state = initialState, action: ActionTypes): initialStateType => {
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
                profile: { ...state.profile, photos: action.photos },
            };
        }
        default: return state;
    }
}

//=========ACTION CREATORS===============================================================================================================================================
type addPostActionCreatorType = {
    type: typeof ADD_POST,
    newPostText: string,
}
export const addPostActionCreator = (newPostText: string): addPostActionCreatorType => {
    return ({
        type: ADD_POST,
        newPostText: newPostText,
    })
}
type setUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: number,
}
export const setUserProfile = (userId: number): setUserProfileType => {
    return ({
        type: SET_USER_PROFILE,
        profile: userId,
    })
}
type setStatusType = {
    type: typeof SET_STATUS,
    status: string,
}
export const setStatus = (status: string): setStatusType => {
    return ({
        type: SET_STATUS,
        status: status,
    })
}
type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType,
}
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessType => {
    return ({
        type: SAVE_PHOTO_SUCCESS,
        photos: photos,
    })
}

//================THUNK CREATORS========================================================================================================================================

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const setUser = (userId: number):ThunkType => {
    return async (dispatch) => {
        const response = await profileAPI.getUser(userId);
        dispatch(setUserProfile(response.data));
    }
}
export const getStatus = (userId: number):ThunkType => {
    return async (dispatch) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }
}
export const updateStatus = (status: string):ThunkType => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}
export const savePhoto = (file: any):ThunkType => {
    return async (dispatch) => {
        const response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    }
}
export const saveProfile = (profile: ProfileType, setStatus: any):ThunkType => {
    return async (dispatch, getState: any) => {
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
