import { getAuth } from "./authReducer";

//========================================================================================================================================================

const INITIALIZED_SUCCESS = 'appReducer/INITIALIZED_SUCCESS';

//========================================================================================================================================================

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            };
        }
        default: return state;
    }
}

//=========ACTION CREATORS===============================================================================================================================================

export const initializedSuccess = () => {
    return ({
        type: INITIALIZED_SUCCESS,
    })
}

//================THUNK CREATORS========================================================================================================================================

export const initializedApp = () => {
    return async (dispatch) => {
        await dispatch(getAuth());
        dispatch(initializedSuccess());
    }
}

//========================================================================================================================================================

export default appReducer;
