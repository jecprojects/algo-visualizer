import { combineReducers } from "redux";

// Importing all reducers
import getalgoReducer from "./getalgoReducer";
import getArrayValuesReducer from "./getArrayValuesReducer"
import generatingSteps from "./generatingSteps";

const rootReducer = combineReducers({
    // all reducers gone here
    algorithm: getalgoReducer,
    arrayData: getArrayValuesReducer,
    generatedSteps: generatingSteps

});

export default rootReducer;

