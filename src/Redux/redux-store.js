import { combineReducers, createStore } from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers(
    {
        stateProfilePage: profileReducer,
        stateMessagesPage: messagesReducer,
    }
);

let store = createStore(reducers);

export default store;
