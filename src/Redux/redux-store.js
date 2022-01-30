import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";
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
        app: appReducer,
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//========================================================================================================================================================

export default store;
