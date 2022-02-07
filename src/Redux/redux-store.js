import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer.ts";
import authReducer from "./authReducer.ts";
import messagesReducer from "./messagesReducer.ts";
import profileReducer from "./profileReducer.ts";
import usersReducer from "./usersReducer.ts";

//========================================================================================================================================================

let reducers = combineReducers(
    {
        stateProfilePage: profileReducer,
        stateMessagesPage: messagesReducer,
        stateUsersPage: usersReducer,
        authReducer: authReducer,
        app: appReducer,
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//========================================================================================================================================================

export default store;
