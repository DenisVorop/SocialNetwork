import { usersAPI } from "../api/api";

const FOLLOW = 'userReducer/FOLLOW';
const UNFOLLOW = 'userReducer/UNFOLLOW';
const SET_USERS = 'userReducer/SET_USERS';
const SET_CURRENT_PAGE = 'userReducer/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'userReducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'userReducer/TOGGLE_IS_FETCHING';
const TOOGLE_IS_FOLOWING_PROGRESS = 'userReducer/TOOGLE_IS_FOLOWING_PROGRESS';

//========================================================================================================================================================

const initialState = {
    usersData: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
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

export const followSuccess = (userId) => {
    return ({
        type: FOLLOW,
        userId: userId,
    })
}
export const unfollowSuccess = (userId) => {
    return ({
        type: UNFOLLOW,
        userId: userId,
    })
}
export const setUsers = (usersData) => {
    return ({
        type: SET_USERS,
        usersData: usersData,
    })
}
export const setCurrentPage = (currentPage) => {
    return ({
        type: SET_CURRENT_PAGE,
        currentPage: currentPage,
    })
}
export const setTotalUsersCount = (totalCount) => {
    return ({
        type: SET_TOTAL_USERS_COUNT,
        count: totalCount,
    })
}
export const toggleIsFetching = (isFetching) => {
    return ({
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    })
}
export const toggleFolowingProgress = (isFetching, userId) => {
    return ({
        type: TOOGLE_IS_FOLOWING_PROGRESS,
        isFetching: isFetching,
        userId: userId,
    })
}

//================THUNK CREATORS========================================================================================================================================

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setCurrentPage(currentPage));
        dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}
export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFolowingProgress(true, userId));
        const response = await usersAPI.follow(userId)
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(toggleFolowingProgress(false, userId));
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
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
