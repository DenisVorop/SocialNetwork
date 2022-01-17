import { combineReducers, createStore } from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers(
    {
        stateProfilePage: profileReducer,
        stateMessagesPage: messagesReducer,
        stateUsersPage: usersReducer,
    }
);

let store = createStore(reducers);

export default store;
