import { getAuth } from "./authReducer";

//========================================================================================================================================================

const INITIALIZED_SUCCESS = 'SET-INITIALIZED-SUCCESS';

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
    return (dispatch) => {
        let promise = dispatch(getAuth());
        promise.then(() => {
            dispatch(initializedSuccess());
        })
    }
}

//========================================================================================================================================================

export default appReducer;
