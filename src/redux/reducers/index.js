import { combineReducers } from "redux";

// Importing all reducers
import getalgoReducer from "./getalgoReducer";

const rootReducer = combineReducers({
    // all reducers gone here
    algorithm: getalgoReducer
});

export default rootReducer;

