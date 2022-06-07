import { arrayValuesConstants } from "./constants";

export const getArrayValuesAction = (arrayData) => {
    return dispatch => {

        dispatch({
            type: arrayValuesConstants.GET_ARRAY_VALUES_SUCCESS,
            payload: { 
                arrayData: {...arrayData }
            }
        });

    }
}