import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

//========================================================================================================================================================

let reducers = combineReducers(
    {
        stateProfilePage: profileReducer,
        stateMessagesPage: messagesReducer,
        stateUsersPage: usersReducer,
        authReducer: authReducer,
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

//========================================================================================================================================================

export default store;
