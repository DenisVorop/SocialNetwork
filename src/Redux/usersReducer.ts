import { usersAPI } from "../api/api";
import { initialStatePhotosType } from '../types/PhotosType';

//========================================================================================================================================================

const FOLLOW = 'userReducer/FOLLOW';
const UNFOLLOW = 'userReducer/UNFOLLOW';
const SET_USERS = 'userReducer/SET_USERS';
const SET_CURRENT_PAGE = 'userReducer/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'userReducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'userReducer/TOGGLE_IS_FETCHING';
const TOOGLE_IS_FOLOWING_PROGRESS = 'userReducer/TOOGLE_IS_FOLOWING_PROGRESS';

//========================================================================================================================================================

type initialStateUsersDataType = {
    id: number,
    name: string,
    status: string,
    photos: initialStatePhotosType,
}

const initialState = {
    usersData: [] as Array<initialStateUsersDataType>,
    pageSize: 8 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    followingInProgress: [] as Array<number>, // array of users id
}

type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                usersData: action.usersData,
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        case TOOGLE_IS_FOLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default: return state;
    }
}

//=========ACTION CREATORS===============================================================================================================================================
type followSuccessType = {
    type: typeof FOLLOW,
    userId: number,
}
export const followSuccess = (userId: number): followSuccessType => {
    return ({
        type: FOLLOW,
        userId: userId,
    })
}
type unfollowSuccessType = {
    type: typeof UNFOLLOW,
    userId: number,
}
export const unfollowSuccess = (userId: number): unfollowSuccessType => {
    return ({
        type: UNFOLLOW,
        userId: userId,
    })
}
type setUsersType = {
    type: typeof SET_USERS,
    usersData: Array<initialStateUsersDataType>,
}
export const setUsers = (usersData: any): setUsersType => {
    return ({
        type: SET_USERS,
        usersData: usersData,
    })
}
type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number,
}
export const setCurrentPage = (currentPage: number): setCurrentPageType => {
    return ({
        type: SET_CURRENT_PAGE,
        currentPage: currentPage,
    })
}
type setTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number,
}
export const setTotalUsersCount = (totalCount: number): setTotalUsersCountType => {
    return ({
        type: SET_TOTAL_USERS_COUNT,
        count: totalCount,
    })
}
type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean,
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => {
    return ({
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    })
}
type toggleFolowingProgressType = {
    type: typeof TOOGLE_IS_FOLOWING_PROGRESS,
    isFetching: boolean,
    userId: number,
}
export const toggleFolowingProgress = (isFetching: boolean, userId: number): toggleFolowingProgressType => {
    return ({
        type: TOOGLE_IS_FOLOWING_PROGRESS,
        isFetching: isFetching,
        userId: userId,
    })
}

//================THUNK CREATORS========================================================================================================================================

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setCurrentPage(currentPage));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}
export const follow = (userId: number) => {
    return async (dispatch: any) => {
        dispatch(toggleFolowingProgress(true, userId));
        const response = await usersAPI.follow(userId)
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(toggleFolowingProgress(false, userId));
    }
}
export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        dispatch(toggleFolowingProgress(true, userId));
        const response = await usersAPI.unfollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleFolowingProgress(false, userId));
    }
}

//========================================================================================================================================================

export default usersReducer;
