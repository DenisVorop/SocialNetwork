import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk"; // @ts-ignore
import appReducer from "./appReducer.ts";// @ts-ignore
import authReducer from "./authReducer.ts";// @ts-ignore
import messagesReducer from "./messagesReducer.ts";// @ts-ignore
import profileReducer from "./profileReducer.ts";// @ts-ignore
import usersReducer from "./usersReducer.ts";

//========================================================================================================================================================

let rootReducer = combineReducers(
    {
        stateProfilePage: profileReducer,
        stateMessagesPage: messagesReducer,
        stateUsersPage: usersReducer,
        authReducer: authReducer,
        app: appReducer,
    }
);

type RootReducerType = typeof rootReducer; // (globalState: GLOBALSTATE) => GLOBALSTATE
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

//========================================================================================================================================================

export default store;
