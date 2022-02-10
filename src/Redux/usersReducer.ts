import { AppStateType, InferActionTypes } from './redux-store';
import { UsersDataType } from './../types/Types';//@ts-ignore
import { usersAPI } from "../api/api.ts";
import { ThunkAction } from 'redux-thunk';

//========================================================================================================================================================

const FOLLOW = 'userReducer/FOLLOW';
const UNFOLLOW = 'userReducer/UNFOLLOW';
const SET_USERS = 'userReducer/SET_USERS';
const SET_CURRENT_PAGE = 'userReducer/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'userReducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'userReducer/TOGGLE_IS_FETCHING';
const TOOGLE_IS_FOLOWING_PROGRESS = 'userReducer/TOOGLE_IS_FOLOWING_PROGRESS';
const SET_FILTER = 'userReducer/SET_FILTER';

//========================================================================================================================================================

const initialState = {
    usersData: [] as Array<UsersDataType>,
    pageSize: 8 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    followingInProgress: [] as Array<number>, // array of users id
    filter: {
        term: '' as string,
        friend: null as null | boolean,
    }
}

type initialStateType = typeof initialState;

type ActionTypes = InferActionTypes<typeof UsersActions>

const usersReducer = (state = initialState, action: ActionTypes): initialStateType => {
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
                //@ts-ignore
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
        case SET_FILTER: {
            return {
                ...state,
                filter: action.payload,
            }
        }
        default: return state;
    }
}

//=========ACTION CREATORS===============================================================================================================================================

export const UsersActions = {
    followSuccess: (userId: number) => {
        return ({
            type: FOLLOW,
            userId: userId,
        } as const)
    },
    unfollowSuccess: (userId: number) => {
        return ({
            type: UNFOLLOW,
            userId: userId,
        } as const)
    },
    setUsers: (usersData: UsersDataType) => {
        return ({
            type: SET_USERS,
            usersData: usersData,
        } as const)
    },
    setCurrentPage: (currentPage: number) => {
        return ({
            type: SET_CURRENT_PAGE,
            currentPage: currentPage,
        } as const)
    },
    setTotalUsersCount: (totalCount: number) => {
        return ({
            type: SET_TOTAL_USERS_COUNT,
            count: totalCount,
        } as const)
    },
    toggleIsFetching: (isFetching: boolean) => {
        return ({
            type: TOGGLE_IS_FETCHING,
            isFetching: isFetching,
        } as const)
    },
    toggleFolowingProgress: (isFetching: boolean, userId: number) => {
        return ({
            type: TOOGLE_IS_FOLOWING_PROGRESS,
            isFetching: isFetching,
            userId: userId,
        } as const)
    },
    setFilter: (filter: FilterType) => {
        return ({
            type: SET_FILTER,
            payload: filter,
        } as const)
    }
}

//================THUNK CREATORS========================================================================================================================================

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const getUsers = (currentPage: number, pageSize: number, filter: FilterType): ThunkType => {
    return async (dispatch) => {
        dispatch(UsersActions.toggleIsFetching(true));
        dispatch(UsersActions.setCurrentPage(currentPage));
        dispatch(UsersActions.setFilter(filter));
        const data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
        dispatch(UsersActions.toggleIsFetching(false));
        dispatch(UsersActions.setUsers(data.items));
        dispatch(UsersActions.setTotalUsersCount(data.totalCount));
    }
}
export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(UsersActions.toggleFolowingProgress(true, userId));
        const response = await usersAPI.follow(userId)
        if (response.data.resultCode === 0) {
            dispatch(UsersActions.followSuccess(userId));
        }
        dispatch(UsersActions.toggleFolowingProgress(false, userId));
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(UsersActions.toggleFolowingProgress(true, userId));
        const response = await usersAPI.unfollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(UsersActions.unfollowSuccess(userId));
        }
        dispatch(UsersActions.toggleFolowingProgress(false, userId));
    }
}

//========================================================================================================================================================

export default usersReducer;

export type FilterType = typeof initialState.filter;
