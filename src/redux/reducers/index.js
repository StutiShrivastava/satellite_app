import { combineReducers } from "redux";
import { satelliteEventReducer } from "./satelliteEventReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
 satelliteEvents: satelliteEventReducer,
 auth: authReducer
});

export default reducers;