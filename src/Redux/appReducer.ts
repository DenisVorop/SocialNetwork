// @ts-ignore
import { getAuth } from "./authReducer.ts";

//========================================================================================================================================================

const INITIALIZED_SUCCESS = 'appReducer/INITIALIZED_SUCCESS';

//========================================================================================================================================================

export type initialStateType = {
    initialized: boolean,
}

let initialState: initialStateType = {
    initialized: false,
}

const appReducer = (state = initialState, action: any):initialStateType => {
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

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = ():initializedSuccessActionType => {
    return ({
        type: INITIALIZED_SUCCESS,
    })
}

//================THUNK CREATORS========================================================================================================================================

export const initializedApp = () => {
    return async (dispatch: any) => {
        await dispatch(getAuth());
        dispatch(initializedSuccess());
    }
}

//========================================================================================================================================================

export default appReducer;
