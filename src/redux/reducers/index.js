import { combineReducers } from "redux";

// Importing all reducers
import getalgoReducer from "./getalgoReducer";
import getArrayValuesReducer from "./getArrayValuesReducer"

const rootReducer = combineReducers({
    // all reducers gone here
    algorithm: getalgoReducer,
    data: getArrayValuesReducer
});

export default rootReducer;

