const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

//========================================================================================================================================================

let initialState = {
    usersData: [],
    pageSize: 1,
    totalUsersCount: 10,
    currentPage: 1,
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
        default: return state;
    }
}

export const followActionCreator = (userId) => {
    return ({
        type: FOLLOW,
        userId,
    })
}

export const unfollowActionCreator = (userId) => {
    return ({
        type: UNFOLLOW,
        userId,
    })
}

export const setUsersActionCreator = (usersData) => {
    return ({
        type: SET_USERS,
        usersData,
    })
}

export const setCurrentPageActionCreator = (currentPage) => {
    return ({
        type: SET_CURRENT_PAGE,
        currentPage,
    })
}

export const setTotalUsersCountActionCreator = (totalUsersCount) => {
    return ({
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount,
    })
}

//========================================================================================================================================================

export default usersReducer;
