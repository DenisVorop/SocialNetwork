import { AppStateType } from './redux-store';
import { ThunkAction } from 'redux-thunk';
// @ts-ignore
import { getAuth } from "./authReducer.ts";

//========================================================================================================================================================

const INITIALIZED_SUCCESS = 'appReducer/INITIALIZED_SUCCESS';

//========================================================================================================================================================

const initialState = {
    initialized: false as boolean,
}

export type initialStateType = typeof initialState

type ActionTypes = initializedSuccessActionType

const appReducer = (state = initialState, action: ActionTypes): initialStateType => {
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

export const initializedSuccess = (): initializedSuccessActionType => {
    return ({
        type: INITIALIZED_SUCCESS,
    })
}

//================THUNK CREATORS========================================================================================================================================

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const initializedApp = (): ThunkType => {
    return async (dispatch) => {
        await dispatch(getAuth());
        dispatch(initializedSuccess());
    }
}

//========================================================================================================================================================

export default appReducer;
