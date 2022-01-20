const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

//========================================================================================================================================================

let initialState = {
    usersData: [],
    pageSize: 8,
    totalUsersCount: 80,
    currentPage: 1,
    isFetching: false,
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
        default: return state;
    }
}

//=========ACTION CREATORS===============================================================================================================================================

export const follow = (userId) => {
    return ({
        type: FOLLOW,
        userId: userId,
    })
}

export const unfollow = (userId) => {
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

export const setTotalUsersCount = (totalUsersCount) => {
    return ({
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount,
    })
}

export const toggleIsFetching = (isFetching) => {
    return ({
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    })
}

//========================================================================================================================================================

export default usersReducer;
