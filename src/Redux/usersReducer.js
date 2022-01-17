const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

//========================================================================================================================================================

let initialState = {
    usersData: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
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
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                usersData: [...state.usersData, ...action.usersData],
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

//========================================================================================================================================================

export default usersReducer;
