import { combineReducers, createStore } from "redux";
import createReducer from "../redux/actions";

const reducers = combineReducers({ createReducer });

const store = createStore(reducers);

export default store;
