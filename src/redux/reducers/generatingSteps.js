import { generatingStepsConstants } from "../actions/constants";

const initState = { success: false, message: null, steps: null };

export default (state = initState, action) => {

    switch(action.type){
        
        case generatingStepsConstants.GENERATING_SORTING_STEPS_REQUEST:
            state = {
                ...state,
                message: action.payload.message,
            };
            break;
        case generatingStepsConstants.GENERATING_SORTING_STEPS_SUCCESS:
            state = {
                ...state,
                message: action.payload.message,
                success: true,
                steps: action.payload.steps
            };
            break;

        case generatingStepsConstants.RESET_STEPS:
            state={
                ...state,
                message: action.payload.message,
                success: false,
                steps: action.payload.steps
            }
    }

    return state;

}