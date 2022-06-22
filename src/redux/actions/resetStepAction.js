import { generatingStepsConstants } from "./constants";

export const resetStepAction = () => {
    return dispatch => {
        dispatch({
            type: generatingStepsConstants.RESET_STEPS,
            payload: { 
                steps: [],
                message: 'value reset complete!'
            }
        });
    }
}