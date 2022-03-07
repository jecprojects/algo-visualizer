import { combineReducers } from "redux";

// Importing all reducers
import getalgoReducer from "./getalgoReducer";
import bubbleSortReducer from "./bubbleSortReducer";

const rootReducer = combineReducers({
    // all reducers gone here
    algorithm: getalgoReducer,
    visual: bubbleSortReducer
});

export default rootReducer;

