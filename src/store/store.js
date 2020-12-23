import { createStore, combineReducers } from "redux";
import arrayUsersReducer from "../Reducers/arrayUsersReducer";

const INITIAL_STATE = {};

const rootReducer = combineReducers({
  arrayUsersReducer
});

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
